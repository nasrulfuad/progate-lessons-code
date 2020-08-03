require "./menu"

class Food < Menu
  attr_accessor :name
  attr_accessor :calorie
  
  # Define the calorie_info method
  def calorie_info
    return "#{self.name} is #{self.calorie} kcal"
  end
end
