50.times do
  x = rand(5)
  name = ['Gaia', 'Thor', 'Loki', 'Wotan', 'Freia'][x]
  content = Faker::Hipster.sentence(x + 5)
  Post.create(name: name, content: content)
  puts "created #{name} - #{content}"
end