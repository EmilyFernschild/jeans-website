class JeanSerializer < ActiveModel::Serializer
  attributes :id, :store, :name, :color, :size, :length, :waist, :price, :rating, :description, :jean_image
  has_one :user
end
