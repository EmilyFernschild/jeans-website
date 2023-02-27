class User < ApplicationRecord
    has_secure_password
    has_many :follows
    has_many :jeans
    has_many :comments
    has_many :likes

    # Allows association to view list of users who follow a given user i.e. user.followers
    has_many :follower_relationships, foreign_key: :following_id, class_name: 'Follow'
    has_many :followers, through: :follower_relationships, source: :follower

    # Allows association to view list of users who follow a given user i.e. user.following
    has_many :following_relationships, foreign_key: :follower_id, class_name: 'Follow'
    has_many :following, through: :following_relationships, source: :following

    validates_presence_of :name, :username, :email
    validates_uniqueness_of :username, :email
    validates :username, length: { in: 0..15 }
    validates :password, length: { in: 8..20 }, presence: true
    
end
