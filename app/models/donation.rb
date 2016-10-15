class Donation < ActiveRecord::Base
  def to_dollars
    self.amount_in_cents/100
  end
end