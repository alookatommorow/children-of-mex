class CreateDonations < ActiveRecord::Migration[5.0]
  def change
    create_table :donations do |t|
      t.integer :amount_in_cents
      t.string :stripe_customer_id
      t.string :currency
      t.string :email
    end

    add_index :donations, :email
  end
end
