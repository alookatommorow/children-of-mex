require "rails_helper"

RSpec.describe Donation do
  describe "#to_dollars" do
    it "returns the donation amount in dollars" do
      donation = build(:donation)

      expect(donation.to_dollars).to eq(20)
    end
  end
end