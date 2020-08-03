class Menu
  attr_accessor :name
  attr_accessor :price
  
  def info
    # Fill in the #{}
    return "#{self.name} $#{self.price}"
  end
end

menu1 = Menu.new
menu1.name = "Pizza"
menu1.price = 8

puts menu1.info
