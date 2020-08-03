class Menu
  attr_accessor :name
  attr_accessor :price
  
  # Define the initialize method
  def initialize
    self.name = "Pizza"
    self.price = 8
  end
  
  def info
    return "#{self.name} $#{self.price}"
  end
  
  def get_total_price(count)
    total_price = self.price * count
    if count >= 3
      total_price -= 1
    end
    return total_price
  end
end

menu1 = Menu.new

# Call menu1's info method, then print the return value
puts menu1.info