SELECT 
    u.user_id,
    u.name,
    u.email
FROM 
    Users u
WHERE 
    u.user_id NOT IN (
        SELECT DISTINCT r.user_id
        FROM Registrations r
        WHERE r.registration_date >= CURDATE() - INTERVAL 90 DAY
    );

