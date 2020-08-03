require "./menu"

menu1 = Menu.new(name: "Pizza", price: 8)
menu2 = Menu.new(name: "Sushi", price: 10)
menu3 = Menu.new(name: "Coke", price: 3)
menu4 = Menu.new(name: "Tea", price: 2)

# Assign an array of menus into the menus variable
menus = [menu1, menu2, menu3, menu4]

# Get each element of menus using the each method, and print its info
menus.each do |menu|
  puts menu.info
end