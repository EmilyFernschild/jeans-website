class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :time
  has_one :jean
  has_one :user
end
