SELECT 
    u.name AS user_name,
    e.title AS event_title,
    e.event_date,
    e.city
FROM 
    Users u
JOIN 
    Registrations r ON u.user_id = r.user_id
JOIN 
    Events e ON r.event_id = e.event_id
WHERE 
    e.event_date > CURRENT_DATE
    AND u.city = e.city
ORDER BY 
    e.event_date;
