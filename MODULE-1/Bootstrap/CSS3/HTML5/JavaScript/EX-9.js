<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal - Async JS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f6f9;
    }

    header {
      background-color: #283593;
      color: white;
      padding: 20px;
      text-align: center;
    }

    main {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
    }

    .event-card {
      background: #fff;
      padding: 20px;
      margin-bottom: 15px;
      border-left: 6px solid #3f51b5;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .event-card h3 {
      margin: 0 0 10px;
    }

    .event-card p {
      margin: 4px 0;
    }

    .event-card button {
      margin-top: 10px;
      padding: 8px 16px;
      background-color: #43a047;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .spinner {
      text-align: center;
      padding: 40px;
      font-size: 18px;
      color: #666;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Portal - Async JS</h1>
  </header>

  <main>
    <div id="events-container" class="spinner">Loading events...</div>
  </main>

  <script>
    const container = document.getElementById("events-container");

    
    const mockFetchEvents = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = [
            { id: 1, name: "Yoga in the Park", date: "2025-06-10", category: "Health", seats: 4 },
            { id: 2, name: "Book Reading", date: "2025-06-15", category: "Literature", seats: 0 },
            { id: 3, name: "Robotics Workshop", date: "2025-06-20", category: "Technology", seats: 3 }
          ];
          Math.random() > 0.1 ? resolve(data) : reject("Failed to load events.");
        }, 1500); 
      });
    };

    // Render events
    function renderEvents(events) {
      container.innerHTML = '';
      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Category: ${event.category}</p>
          <p>Seats Left: ${event.seats}</p>
          <button ${event.seats === 0 ? 'disabled' : ''}>Register</button>
        `;

        const button = card.querySelector("button");
        button.onclick = () => {
          if (event.seats > 0) {
            event.seats--;
            alert(`Registered for "${event.name}"`);
            renderEvents(events); // Re-render
          }
        };

        container.appendChild(card);
      });
    }

    // Version 1: Using .then().catch()
    function loadEventsWithThen() {
      container.innerHTML = '<div class="spinner">Loading events...</div>';
      mockFetchEvents()
        .then(events => {
          renderEvents(events);
        })
        .catch(error => {
          container.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
        });
    }

    // Version 2: Using async/await
    async function loadEventsAsync() {
      container.innerHTML = '<div class="spinner">Loading events...</div>';
      try {
        const events = await mockFetchEvents();
        renderEvents(events);
      } catch (error) {
        container.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
      }
    }

    
    loadEventsAsync();       // Using async/await
  </script>
</body>
</html>
