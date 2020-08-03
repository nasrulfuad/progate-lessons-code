-- get the name and number sold for the top 5 most-sold items
SELECT items.id, items.name, COUNT(*)
FROM sales_records
JOIN items
ON sales_records.item_id = items.id
GROUP BY items.id, items.name
ORDER BY COUNT(*) DESC
LIMIT 5;
