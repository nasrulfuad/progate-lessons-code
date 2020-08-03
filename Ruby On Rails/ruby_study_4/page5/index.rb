class Menu
  attr_accessor :name
  attr_accessor :price
end

menu1 = Menu.new

menu1.name = "Pizza"
puts menu1.name

# Assign 8 to menu1's price
menu1.price = 8

# Print menu1's price

puts menu1.price