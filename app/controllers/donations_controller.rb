class DonationsController < ApplicationController
  require "stripe"
  Stripe.api_key = ENV.fetch("STRIPE_SECRET")

  def new
    @donation = Donation.new
  end

  def create
    @donation = Donation.where(email: donation_params[:email]).take
    donor = stripe_customer
    Stripe::Charge.create(
      amount: donation_params[:amount_in_cents],
      currency: "usd",
      customer: donor.id,
      description: "Donation to Children of Mexico International"
    )
    Donation.create(donation_params)
  end

  private

    def stripe_customer
      if @donation
        retrieve_stripe_customer
      else
        create_stripe_customer
      end
    end

    def create_stripe_customer
      customer = Stripe::Customer.create(email: donation_params[:email])
      card = customer.sources.create(source: params[:stripe_token])
      customer.default_source = card.id
      customer
    end

    def retrieve_stripe_customer
      Stripe::Customer.retrieve(@donation.stripe_customer_id)
    end

    def donation_params
      params.require(:donation).permit(:email, :amount_in_cents)
    end
end