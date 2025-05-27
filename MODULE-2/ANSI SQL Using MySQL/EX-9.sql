SELECT 
    o.organizer_id,
    o.name AS organizer_name,
    e.status,
    COUNT(e.event_id) AS event_count
FROM 
    Organizers o
JOIN 
    Events e ON o.organizer_id = e.organizer_id
GROUP BY 
    o.organizer_id, o.name, e.status
ORDER BY 
    o.name, e.status;
