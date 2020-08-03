exams = [
  {subject: "Math", score: 80},
  {subject: "Science", score: 55}
]

# Get each element of exams using the each method, and print "Your score for ___ is ___%"
exams.each do |exam|
  puts "Your score for #{exam[:subject]} is #{exam[:score]}%"
end