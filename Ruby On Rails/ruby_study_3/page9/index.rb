def price_with_shipping(price)
  # if price is equal to or greater than 50, return price
	if price >= 50
	  return price
  end
  # Add 5 to price, and return it
	return price + 5
end

puts "The total price is $30"
puts "With shipping, it will be $#{price_with_shipping(30)}"
puts "-----------"
puts "The total price is $100"
puts "With shipping, it will be $#{price_with_shipping(100)}"
