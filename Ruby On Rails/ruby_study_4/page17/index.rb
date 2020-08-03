require "./menu"

menu1 = Menu.new(name: "Pizza", price: 8)
menu2 = Menu.new(name: "Sushi", price: 10)
menu3 = Menu.new(name: "Coke", price: 3)
menu4 = Menu.new(name: "Tea", price: 2)

menus = [menu1, menu2, menu3, menu4]

index = 0
menus.each do |menu|
  puts "#{index}. #{menu.info}"
  index += 1
end

puts "--------------"
puts "Select an item by its number:"

# Receive input, then assign it to the order variable as an integer
order = gets.chomp.to_i

# Assign the selected menu to the selected_menu variable
selected_menu = menus[order]

# Print "You have selected: ___"
puts "You have selected: #{selected_menu.name}"

puts "How many?(Buy 3 or more for $1 discount):"

# Receive input, then assign it to the count variable as an integer
count = gets.chomp.to_i

# Print "The total price is $___"
puts "The total price is $#{selected_menu.get_total_price(count)}"