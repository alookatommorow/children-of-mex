require "rails_helper"

RSpec.describe Donation do
  describe "#to_dollars" do
    it "returns the donation amount in dollars" do
      donation = build(:donation, amount_in_cents: 2075)
      amount_to_dollars = donation.to_dollars

      expect(amount_to_dollars).to eq(20.75)
      expect(amount_to_dollars).to be_a(Float)
    end
  end
end