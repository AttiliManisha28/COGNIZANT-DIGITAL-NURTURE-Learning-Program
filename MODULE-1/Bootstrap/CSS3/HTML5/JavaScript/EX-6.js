<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal - Arrays & Methods</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #009688;
      color: white;
      text-align: center;
      padding: 20px;
    }

    main {
      max-width: 900px;
      margin: 30px auto;
      padding: 20px;
    }

    .event-card {
      background-color: white;
      border-left: 5px solid #009688;
      padding: 15px 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
    }

    .event-card h3 {
      margin: 0 0 10px;
    }

    .event-card p {
      margin: 5px 0;
    }

    .btn {
      background-color: #009688;
      color: white;
      padding: 10px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }

    .btn:hover {
      background-color: #00796B;
    }

    select {
      padding: 8px;
      margin-bottom: 20px;
    }

    .filter-label {
      font-weight: bold;
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Portal - Arrays & Methods</h1>
  </header>

  <main>
    <div style="margin-bottom: 20px;">
      <span class="filter-label">Filter:</span>
      <select id="categorySelect" onchange="filterMusicEvents()">
        <option value="all">All Events</option>
        <option value="Music">Only Music Events</option>
      </select>
    </div>

    <button class="btn" onclick="addNewEvent()">Add Sample Event</button>

    <div id="events-container"></div>
  </main>

  <script>
    
    let events = [
      { name: "Workshop on Baking", date: "2025-06-10", category: "Cooking" },
      { name: "Concert: Jazz Night", date: "2025-06-15", category: "Music" },
      { name: "Workshop on Painting", date: "2025-06-20", category: "Art" },
      { name: "Rock Band Live", date: "2025-06-25", category: "Music" }
    ];

    
    function addNewEvent() {
      const newEvent = {
        name: "Workshop on Gardening",
        date: "2025-07-05",
        category: "Environment"
      };
      events.push(newEvent);
      renderEvents(events);
      alert("New event added!");
    }

   
    function formatEventNames(eventsList) {
      return eventsList.map(event => ({
        ...event,
        name: event.name.replace(/^(?!Workshop|Concert)/, "Workshop on ")
      }));
    }

    
    function filterMusicEvents() {
      const category = document.getElementById("categorySelect").value;
      let filtered = events;

      if (category === "Music") {
        filtered = events.filter(e => e.category === "Music");
      }

      const formatted = formatEventNames(filtered);
      renderEvents(formatted);
    }

    
    function renderEvents(eventArray) {
      const container = document.getElementById("events-container");
      container.innerHTML = "";

      eventArray.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Category: ${event.category}</p>
        `;
        container.appendChild(card);
      });
    }

    
    renderEvents(events);
  </script>
</body>
</html>
