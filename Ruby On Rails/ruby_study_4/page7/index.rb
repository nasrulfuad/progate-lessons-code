class Menu
  attr_accessor :name
  attr_accessor :price
  
  # Define the info method
  def info
    puts "The name and the price will be printed"
  end
end

menu1 = Menu.new
menu1.name = "Pizza"
menu1.price = 8

# Call menu1's info method
menu1.info