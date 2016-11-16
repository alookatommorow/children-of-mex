class DonationMailer < ApplicationMailer
  default from: 'childrenofmex@gmail.com'

  def confirmation_email(donation)
    @donation = donation
    mail(to: @donation.email, subject: 'Thank you for Your Donation to Children of Mexico International')
  end
end
