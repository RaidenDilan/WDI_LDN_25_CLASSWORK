class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :photo
      t.date :release_date
      t.float :price
      t.references :artist, foreign_key: true

      t.timestamps
    end
  end
end
