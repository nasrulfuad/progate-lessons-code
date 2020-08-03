def discount(price)
	# return price / 2
	return price / 2
end

puts "Headphones are on sale today!"

# Call the discount method, then assign it into the half_price variable
half_price = discount(150)

# Print "The sale price is $___" using the half_price variable
puts "The sale price is $#{half_price}"
