# Preview all emails at http://localhost:3000/rails/mailers/donation_mailer
class DonationMailerPreview < ActionMailer::Preview
  def confirmation_email
    DonationMailer.confirmation_email(Donation.last)
  end
end
