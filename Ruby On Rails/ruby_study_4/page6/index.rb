class Menu
  attr_accessor :name
  attr_accessor :price
end

menu1 = Menu.new

menu1.name = "Pizza"
puts menu1.name

menu1.price = 8
puts menu1.price

# Create an instance of Menu, and assign it to the menu2 variable
menu2 = Menu.new

# Assign "Sushi" to menu2's name
menu2.name = 'Sushi'

# Print menu2's name
puts menu2.name

# Assign 10 to menu2's price
menu2.price = 10

# Print menu2's price

puts menu2.price