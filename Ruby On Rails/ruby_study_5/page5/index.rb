require "./food"
require "./drink"

food1 = Food.new(name: "Pizza", price: 8)
food1.calorie = 700

# Call food1's calorie_info method, then print the return value
puts food1.calorie_info
