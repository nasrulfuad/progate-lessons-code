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
order = gets.chomp.to_i

selected_menu = menus[order]
puts "You have selected: #{selected_menu.name}"

puts "How many?(Buy 3 or more for $1 discount):"
count = gets.chomp.to_i

puts "The total price is $#{selected_menu.get_total_price(count)}"
