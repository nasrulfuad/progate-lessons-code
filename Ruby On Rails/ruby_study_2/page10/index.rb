exam = {subject: "Math"}

# Add an if statement based on the value with the key :score
if exam[:score]
  puts "Your score for #{exam[:subject]} is #{exam[:score]}%"
else
  puts "Your score for #{exam[:subject]}  has not been assessed"
end