puts "Please enter your name"

# Receive input, then assign it to the name variable
name = gets.chomp

# Print "Hello, ___"
puts "Hello, #{name}"

puts "This cake costs $2"
puts "How many would you like to buy?"

# Receive input, then assign it to the count variable as an integer
count = gets.chomp.to_i

# Assign 2 * count to the total_price variable
total_price = 2 * count

# Print "The total price is $___"
puts "The total price is $#{total_price}"
