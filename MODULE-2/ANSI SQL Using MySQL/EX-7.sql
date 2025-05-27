SELECT 
    u.name AS user_name,
    e.title AS event_title,
    f.rating,
    f.comment
FROM 
    Feedback f
JOIN 
    Users u ON f.user_id = u.user_id
JOIN 
    Events e ON f.event_id = e.event_id
WHERE 
    f.rating < 3;
