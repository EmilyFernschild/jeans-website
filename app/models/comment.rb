class Comment < ApplicationRecord
  belongs_to :jean
  belongs_to :user

  validates :comment, presence: true
end
