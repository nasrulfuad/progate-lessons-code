# Rewrite the parameters to receive keyword arguments
def buy(item:, price:, count:)
	puts "You have bought #{count} #{item}s"
	puts "The total price is $#{price * count}"
end

# Rewrite the arguments with keyword arguments
buy(item:"headphone", price:150, count:2)
