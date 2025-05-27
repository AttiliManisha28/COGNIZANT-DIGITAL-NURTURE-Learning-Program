<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f0f8ff;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #1976D2;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    main {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
    }

    .event-card {
      background: #fff;
      border-left: 6px solid #1976D2;
      padding: 15px 20px;
      margin-bottom: 15px;
      border-radius: 8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.05);
    }

    .event-card h3 {
      margin: 0 0 10px;
    }

    .event-card p {
      margin: 5px 0;
    }

    .event-card button {
      margin-top: 10px;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      background-color: #4CAF50;
      color: white;
      font-size: 14px;
      cursor: pointer;
    }

    select {
      padding: 8px;
      margin-bottom: 20px;
      font-size: 14px;
    }

    .filter-label {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Local Community Event Portal</h1>
  </header>

  <main>
    <label class="filter-label" for="categoryFilter">Filter by Category:</label>
    <select id="categoryFilter" onchange="applyCategoryFilter()">
      <option value="all">All</option>
      <option value="Health">Health</option>
      <option value="Education">Education</option>
      <option value="Art">Art</option>
      <option value="Environment">Environment</option>
    </select>

    <div id="events-container"></div>
  </main>

  <script>
    
    let events = [];

    
    function createRegistrationTracker() {
      const counts = {};
      return function(category) {
        counts[category] = (counts[category] || 0) + 1;
        console.log(`Registrations in ${category}: ${counts[category]}`);
      };
    }

    const trackRegistration = createRegistrationTracker();

    
    function addEvent(name, date, category, seats) {
      events.push({
        id: events.length,
        name,
        date,
        category,
        seats
      });
    }

    
    function registerUser(eventId) {
      const event = events.find(e => e.id === eventId);
      if (!event) return alert("Event not found.");

      if (event.seats > 0) {
        event.seats--;
        trackRegistration(event.category);
        renderEvents(currentCategory); // Refresh the UI
        alert("Registration successful!");
      } else {
        alert("No seats available.");
      }
    }

    
    function filterEventsByCategory(category, callback) {
      if (category === "all") return callback(events);
      const filtered = events.filter(e => e.category === category);
      callback(filtered);
    }

    
    function renderEvents(category = "all") {
      const container = document.getElementById("events-container");
      container.innerHTML = "";

      filterEventsByCategory(category, (filteredEvents) => {
        if (filteredEvents.length === 0) {
          container.innerHTML = "<p>No events found in this category.</p>";
          return;
        }

        filteredEvents.forEach(event => {
          const div = document.createElement("div");
          div.className = "event-card";
          div.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Category: ${event.category}</p>
            <p>Available Seats: ${event.seats}</p>
            <button onclick="registerUser(${event.id})" ${event.seats === 0 ? "disabled" : ""}>Register</button>
          `;
          container.appendChild(div);
        });
      });
    }

    
    let currentCategory = "all";
    function applyCategoryFilter() {
      currentCategory = document.getElementById("categoryFilter").value;
      renderEvents(currentCategory);
    }

    
    addEvent("Morning Yoga", "2025-06-15", "Health", 10);
    addEvent("Tech Bootcamp", "2025-06-20", "Education", 5);
    addEvent("Painting Class", "2025-07-01", "Art", 3);
    addEvent("Beach Cleanup", "2025-06-25", "Environment", 8);
    addEvent("Nutrition Talk", "2025-06-18", "Health", 2);

    
    renderEvents();
  </script>
</body>
</html>
