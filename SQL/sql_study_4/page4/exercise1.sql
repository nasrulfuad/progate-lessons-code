-- add a new record to the students table, where the name is Katy and the course is HTML
insert into students(name, course) values('Katy', 'HTML');

-- within the students table, update the name to Juliet and the course to Ruby, for the record that has the id 6
update students set name = 'Juliet', course = 'Ruby' where id = 6;

-- within the students table, delete the record with the id 2
delete from students where id = 2;

-- do not delete the following query
SELECT * FROM students;
