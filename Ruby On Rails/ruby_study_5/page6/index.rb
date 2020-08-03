# Rewrite to import food.rb and drink.rb
require "./food"
require "./drink"

# Change food1 and food2 to instances of the Food class
food1 = Food.new(name: "Pizza", price: 8)
food2 = Food.new(name: "Sushi", price: 10)
# Change drink1 and drink2 to instances of the Drink class
drink1 = Drink.new(name: "Coke", price: 3)
drink2 = Drink.new(name: "Tea", price: 2)

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
