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
    ).create_charge

    @donation = Donation.create(
      email: donation_params[:email],
      amount_in_cents: donation_params[:amount_in_cents],
      name: donation_params[:name],
      stripe_customer_id: stripe_charger.customer_id,
    )

    render partial: "/donations/success", locals: { donation: @donation }
  end

  private

    def donation_params
      params.require(:donation).permit(:email, :amount_in_cents, :name)
    end
end