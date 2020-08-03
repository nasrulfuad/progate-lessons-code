# Define the shipping_free? method
def shipping_free?(price)
  return price >= 50
end


# Add control flow based on the return value of the shipping_free? function
if shipping_free?(30)
	puts "Shipping is free for purchases above $50"
else
  puts "The shipping fee will be $5"
end
