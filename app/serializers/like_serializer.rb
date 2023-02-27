class LikeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :jean
  has_one :user
end
