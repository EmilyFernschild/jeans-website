class CreateJeans < ActiveRecord::Migration[7.0]
  def change
    create_table :jeans do |t|
      t.string :store
      t.string :name
      t.string :color
      t.integer :size
      t.string :length
      t.string :waist
      t.integer :price
      t.integer :rating
      t.string :description
      t.string :jean_image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
