require "rails_helper"

RSpec.feature "Visitor makes a donation" do
  scenario "They get errors if they don't put in an amount", js: true do
    visit root_path
    click_on "DONATE NOW"
    click_on "Checkout"

    expect(page).to have_text("Please enter an amount")
  end
end