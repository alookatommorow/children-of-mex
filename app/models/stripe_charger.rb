class StripeCharger
  attr_reader :customer_id

  def initialize(email:, amount:, token:)
    @email = email
    @amount = amount
    @token = token
    @donation = Donation.where(email: @email).take
  end

  def create_charge
    Stripe::Charge.create(
      amount: @amount,
      currency: "usd",
      customer: stripe_customer.id,
      description: "Donation to Children of Mexico International"
    )
  end

  private

    def stripe_customer
      if @donation
        @customer_id = @donation.stripe_customer_id
        retrieve_stripe_customer
      else
        create_stripe_customer
      end
    end

    def create_stripe_customer
      customer = Stripe::Customer.create(email: @email)
      card = customer.sources.create(source: @token)
      customer.default_source = card.id
      @customer_id = customer.id
      customer
    end

    def retrieve_stripe_customer
      Stripe::Customer.retrieve(@donation.stripe_customer_id)
    end
end