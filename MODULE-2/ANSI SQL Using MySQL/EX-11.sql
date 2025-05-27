SELECT 
    DATE(registration_date) AS reg_date,
    COUNT(*) AS user_count
FROM 
    Users
WHERE 
    registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY 
    DATE(registration_date)
ORDER BY 
    reg_date;
