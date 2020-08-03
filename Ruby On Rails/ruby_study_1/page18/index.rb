number = 48

# Add a conditinal statement
if number % 3 == 0 && number % 5 == 0
  puts "This is a multiple of 15"
elsif number % 5 == 0
  puts "This is a multiple of 5"
elsif number % 3 == 0
  puts "This is a multiple of 3"
else
  puts "This is not a multiple of 3 or 5"
end