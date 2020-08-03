require "./food"
require "./drink"

food1 = Food.new(name: "Pizza", price: 8, calorie: 700)
food2 = Food.new(name: "Sushi", price: 10, calorie: 600)
drink1 = Drink.new(name: "Coke", price: 3, volume: 500)
drink2 = Drink.new(name: "Tea", price: 2, volume: 400)

menus = [food1, food2, drink1, drink2]

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
