class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :email
      t.integer :waist
      t.integer :height
      t.integer :weight
      t.integer :age
      t.string :usual_size
      t.string :profile_picture

      t.timestamps
    end
  end
end
