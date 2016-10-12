FactoryGirl.define do
  factory :donation do
    amount_in_cents 2000
    email sequence(:email) { |n| "darth_vader#{n}@death.star" }
  end
end