-- get the name and number of items for users who have purchased 10 items or more
select users.id, users.name, count(*) as 'number'
FROM sales_records
JOIN users ON sales_records.user_id = users.id
JOIN items ON sales_records.item_id = items.id
group by users.name
having count(*) >= 10;