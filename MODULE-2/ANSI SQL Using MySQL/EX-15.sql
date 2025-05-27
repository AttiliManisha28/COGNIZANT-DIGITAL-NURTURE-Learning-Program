SELECT 
    s1.event_id,
    s1.session_id AS session_1,
    s2.session_id AS session_2,
    s1.session_start, s1.session_end,
    s2.session_start, s2.session_end
FROM 
    Sessions s1
JOIN 
    Sessions s2 ON s1.event_id = s2.event_id
    AND s1.session_id < s2.session_id  -- prevent self-join and duplicates
WHERE 
    s1.session_start < s2.session_end
    AND s2.session_start < s1.session_end;
