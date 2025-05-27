SELECT 
    s.speaker_id,
    sp.name,
    COUNT(*) AS session_count
FROM 
    Sessions s
JOIN 
    Speakers sp ON s.speaker_id = sp.speaker_id
GROUP BY 
    s.speaker_id, sp.name
HAVING 
    session_count > 1;
