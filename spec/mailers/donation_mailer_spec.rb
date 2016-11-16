require "rails_helper"

RSpec.describe DonationMailer do
  describe '#confirmation_email' do
    it 'sends the confirmation_email' do
      donation = build(:donation, name: "Lando Calrissian")
      mail = DonationMailer.confirmation_email(donation)

      expect(mail.subject).to eq("Thank you for Your Donation to Children of Mexico International")
      expect(mail.to).to eq([donation.email])
      expect(mail.from).to eq(["childrenofmex@gmail.com"])
      expect(mail.body.encoded).to include("On behalf of Children of Mexico International")
    end
  end
end
