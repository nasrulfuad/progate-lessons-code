# Import food.rb and drink.rb using require
require "./food"
require "./drink"

# Create an instance of Food, then assign it into the food1 variable
food1 = Food.new(name:'Pizza', price:8)

# Call food1's info method, then print the return value
puts food1.info

# Create an instance of Drink, then assign it to the drink1 variable
drink1 = Drink.new(name: 'Coke', price: 3)

# Call drink1's info method, then print the return value
puts drink1.info
