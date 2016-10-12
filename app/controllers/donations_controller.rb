class DonationsController < ApplicationController
  require "stripe"
  Stripe.api_key = ENV.fetch("STRIPE_SECRET")

  def new
    @donation = Donation.new
  end

  def create

    StripeCharger.new(
      email: donation_params[:email],
      amount: donation_params[:amount_in_cents],
      token: params[:stripe_token]
    ).create_charge
    Donation.create(donation_params)
  end

  private

    def donation_params
      params.require(:donation).permit(:email, :amount_in_cents)
    end
end