-- get the user id and name of users who purchased "sandals"
select users.id, users.name
FROM sales_records
JOIN users ON sales_records.user_id = users.id
JOIN items ON sales_records.item_id = items.id
WHERE sales_records.item_id = 18
GROUP BY users.id;