require "rails_helper"

RSpec.describe StripeCharger do
  describe "#create_charge" do
    context "donor is a first-timer" do
      it "creates a stripe customer" do
        email = "han_solo@millenniumfalcon.org"
        stub_create_and_retrieve_customer
        stub_charge

        StripeCharger.new(email: email, amount: "100", token: "THISISATOKEN").create_charge

        expect(Stripe::Customer).not_to have_received(:retrieve)
        expect(Stripe::Customer).to have_received(:create).with(email: email)
      end
    end

    context "donor is not a first-timer" do
      it "retrieves a stripe customer" do
        email = "chewbacca@wookie.io"
        donation = create(:donation, email: email, amount_in_cents: "50", stripe_customer_id: "boba_fett_23456")
        stub_create_and_retrieve_customer
        stub_charge

        StripeCharger.new(email: email, amount: "100", token: "THISISATOKEN").create_charge

        expect(Stripe::Customer).not_to have_received(:create)
        expect(Stripe::Customer).to have_received(:retrieve).with(donation.stripe_customer_id)
      end
    end

    it "creates a stripe charge" do
      email = "luke@skywalker.net"
      stub_create_customer
      stub_charge

      StripeCharger.new(email: email, amount: "100", token: "THISISATOKEN").create_charge

      expect(Stripe::Charge).to have_received(:create).with(
        customer: "jawa_12345",
        amount: "100",
        currency: "usd",
        description: "Donation to Children of Mexico International",
      )
    end
  end
end