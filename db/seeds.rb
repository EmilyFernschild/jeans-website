
User.destroy_all
Jean.destroy_all
Follow.destroy_all
Comment.destroy_all
Like.destroy_all

puts "🌱 Seeding data..."
puts "Seeding users..."
u1 = User.create!(
    name:"Susie",
    username: "SusieQ",
    password_digest: "Password11",
    email: "email@gmail.com",
    waist: 31,
    height: 32,
    age: 25,
    usual_size: 4, 
    profile_picture: ""
)
u2 = User.create!(
    name:"Jerry",
    username: "Jer",
    password_digest: "Password12",
    email: "Jerry@aol.com",
    waist: 34,
    height: 34,
    age: 29,
    usual_size: 6, 
    profile_picture: ""
)

puts "Seeding jeans..."
j1 = Jean.create!(
    store: "Target",
    name: "Flare Jean",
    color: "Light blue",
    size: 12,
    length: "32",
    waist: "31", 
    price: 30, 
    rating: 4,
    description: "Super cute!",
    jean_image: "",
    user_id: u1.id,
)
j2 = Jean.create!(
    store: "Target",
    name: "Flare Jean",
    color: "Light blue",
    size: 12,
    length: "32",
    waist: "31", 
    price: 30, 
    rating: 4,
    description: "Not a fan of the color",
    jean_image: "",
    user_id: u1.id,
)
puts "Seeding comments..."
c1 = Comment.create!(
    comment: "A really good fit!", 
    time: 1.week.ago,
    jean_id: j2.id,
    user_id: u1.id,
)
c1 = Comment.create!(
    comment: "Size up", 
    time: 2.week.ago,
    jean_id: j1.id,
    user_id: u2.id,
)

puts "Seeding followers..."
f1 = Follow.create!(follower_id: u1.id, following_id: u2.id)

puts "Seeding likes..."
l1 = Like.create!(jean_id: j1.id, user_id: u2.id)

puts "🌱"