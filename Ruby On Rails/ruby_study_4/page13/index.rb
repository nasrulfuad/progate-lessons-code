# Move the Menu class to menu.rb
# After moving the Menu class, import it here
require "./menu"

# Do not move this code
menu1 = Menu.new(name: "Sushi", price: 10)

puts menu1.info
