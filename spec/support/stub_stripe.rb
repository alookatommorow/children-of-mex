def stub_create_customer
  allow(Stripe::Customer).to receive(:create).and_return(stripe_customer)
end

def stub_retrieve_customer
  allow(Stripe::Customer).to receive(:retrieve).and_return(stripe_customer)
end

def stub_create_and_retrieve_customer
  stub_create_customer
  stub_retrieve_customer
end

def stub_charge
  allow(Stripe::Charge).to receive(:create)
end

def stripe_customer
  double("Stripe::Customer", id: "jawa_12345").tap do |sc|
    allow(sc).to receive(:sources).and_return(stripe_list_object)
    allow(sc).to receive("default_source=")
    allow(sc).to receive(:save)
  end
end

def stripe_list_object
  double("Stripe::ListObject").tap do |lo|
    allow(lo).to receive(:create).and_return(stripe_card)
    allow(lo).to receive(:save)
  end
end

def stripe_card
  double("Stripe::Card", id: "abcedpefsdf").tap do |sc|
    allow(sc).to receive(:save)
  end
end