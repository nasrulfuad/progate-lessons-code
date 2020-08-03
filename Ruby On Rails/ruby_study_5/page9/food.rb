require "./menu"

class Food < Menu
  attr_accessor :calorie
  
  def initialize(name:, price:, calorie:)
    # Rewrite the following using super
    super(name: name, price: price)
    self.calorie = calorie
  end
  
  def info
    return "#{self.name} $#{self.price} (#{self.calorie}kcal)"
  end
  
  def calorie_info
    return "#{self.name} is #{self.calorie}kcal"
  end
end
