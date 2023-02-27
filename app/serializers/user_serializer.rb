class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :email, :waist, :height, :weight, :age, :usual_size, :profile_picture
end
