require "./food"
require "./drink"

food1 = Food.new(name: "Pizza", price: 8)
drink1 = Drink.new(name: "Coke", price: 3)

# Assign 700 to food1.calorie
food1.calorie = 700

# Print food1.calorie
puts food1.calorie

# Assign 500 to drink1.volume
drink1.volume = 500

# Print drink1.volume
puts drink1.volume