class Donation < ActiveRecord::Base
  after_create :send_confirmation

  def to_dollars
    self.amount_in_cents/100.to_f
  end

  private

    def send_confirmation
      DonationMailer.confirmation_email(self).deliver_later
    end
end