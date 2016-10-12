FactoryGirl.define do
  factory :donation do
    amount_in_cents 2000
    sequence(:email) { |n| "darth_vader#{n}@death.star" }
  end
end