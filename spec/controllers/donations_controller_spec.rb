require "rails_helper"

RSpec.describe DonationsController do
  describe "#create" do
    it "creates a donation and stripe charge" do
      email = "leia@alderaan.net"
      stub_charge
      stub_create_customer

      process :create, method: :post, params: { stripe_token: "THISISATOKEN", donation: {email: email, amount_in_cents: "100", } }

      expect(Donation.last.email).to eq(email)
      expect(Donation.last.amount_in_cents).to eq(100)
    end
  end
end