class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :image
      t.integer :price
      t.string :isbn

      t.timestamps
    end
  end
end
