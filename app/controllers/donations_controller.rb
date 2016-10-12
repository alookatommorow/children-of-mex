class DonationsController < ApplicationController
  require "stripe"
  Stripe.api_key = ENV.fetch("STRIPE_SECRET")

  def new
    @donation = Donation.new
  end

  def create
    stripe_charger = StripeCharger.new(
      email: donation_params[:email],
      amount: donation_params[:amount_in_cents],
      token: params[:stripe_token]
    )
    stripe_charger.create_charge
    Donation.create(
      email: donation_params[:email],
      amount_in_cents: donation_params[:amount_in_cents],
      stripe_customer_id: stripe_charger.customer_id
    )
  end

  private

    def donation_params
      params.require(:donation).permit(:email, :amount_in_cents)
    end
end