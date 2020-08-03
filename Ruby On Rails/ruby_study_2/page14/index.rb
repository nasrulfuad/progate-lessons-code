characters = [
  {name: "Ken the Ninja", age: 14},
  {name: "Master White"},
  {name: "Baby Ben", age: 5},
  {name: "Birdie"}
]

# Prints the name of characters name by using each
characters.each do |character|
  puts "---------------------------------"
  puts "My name is #{character[:name]}"
end