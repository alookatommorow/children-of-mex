require "rails_helper"

RSpec.describe DonationsController do
  describe "#create" do
    it "creates a donation, stripe customer, stripe charge, and sends email" do
      email = "leia@alderaan.net"
      message_delivery = instance_double(ActionMailer::MessageDelivery)
      allow(DonationMailer).to receive(:confirmation_email).and_return(message_delivery)
      allow(message_delivery).to receive(:deliver_later)
      stub_create_customer
      stub_charge

      process :create, method: :post, params: { stripe_token: "THISISATOKEN", donation: {email: email, amount_in_cents: "100", name: "Princess Leia"} }

      last_donation = Donation.last

      expect(DonationMailer).to have_received(:confirmation_email).with(last_donation)
      expect(message_delivery).to have_received(:deliver_later)
      expect(last_donation.email).to eq(email)
      expect(last_donation.amount_in_cents).to eq(100)
    end
  end
end