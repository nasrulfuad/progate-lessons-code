require "./menu"

menu1 = Menu.new(name: "Pizza", price: 8)
menu2 = Menu.new(name: "Sushi", price: 10)
menu3 = Menu.new(name: "Coke", price: 3)
menu4 = Menu.new(name: "Tea", price: 2)

menus = [menu1, menu2, menu3, menu4]

# Set the index variable to 0
index = 0

menus.each do |menu|
  # Print the index and the menu's info
  puts "#{index}. #{menu.info}"
  
  # Update the index variable by adding 1 to it
  index += 1
end
