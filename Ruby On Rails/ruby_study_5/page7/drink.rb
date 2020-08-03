require "./menu"

class Drink < Menu
  attr_accessor :volume
  
  # Define the info method
  def info
    return "#{self.name} $#{self.price} (#{self.volume}mL)"
  end
  
end
