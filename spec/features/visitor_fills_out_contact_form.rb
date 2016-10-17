require "rails_helper"

RSpec.feature "Visitor fills out contact form" do
  scenario "They get errors if they don't fill out fields correctly", js: true do
    visit contact_path
    click_on "Send"

    expect(page).to have_text("Please enter a name")
    expect(page).to have_text("Please enter a valid email address")
    expect(page).to have_text("Please enter a message")
  end

  # scenario "They fill out the form and get a success message", js: true do
  #   visit contact_path
  #   fill_in "Full Name", with: "C3PO"
  #   fill_in "Email", with: "C3PO@protocoldroid.com"
  #   fill_in "Type your message here...", with: "sup"

  #   click_on "Send"
  #   expect(page).to have_text("Thank you for your inquiry", visible: false)
  # end
end