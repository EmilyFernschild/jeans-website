class Jean < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes

  validates_presence_of :store, :name, :size, :description
end
