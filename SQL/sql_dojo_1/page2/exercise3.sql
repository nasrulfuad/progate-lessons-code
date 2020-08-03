-- get the number of users by age and the ages of users
select age, count(age) from users group by age;