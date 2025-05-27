<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal - Modern JS</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f0f4f8;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #1976d2;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    main {
      max-width: 900px;
      margin: 30px auto;
      padding: 20px;
    }

    .event-card {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 15px;
      border-left: 6px solid #1976d2;
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
      background-color: #388e3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .event-card button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Portal - Modern JS</h1>
  </header>

  <main>
    <div id="events-container"></div>
  </main>

  <script>
    const events = [
      { id: 1, name: "Food Festival", date: "2025-06-10", category: "Culture", seats: 5 },
      { id: 2, name: "Tech Meetup", date: "2025-06-20", category: "Technology", seats: 0 },
      { id: 3, name: "Nature Walk", date: "2025-06-25", category: "Environment", seats: 2 }
    ];

    const container = document.getElementById("events-container");

    
    const getAvailableEvents = (list = []) => {
      const clonedList = [...list]; 
      return clonedList.filter(({ seats }) => seats > 0);
    };

   
    const renderEvents = (eventList = []) => {
      container.innerHTML = '';

      if (eventList.length === 0) {
        container.innerHTML = '<p>No available events at the moment.</p>';
        return;
      }

      eventList.forEach(event => {
        const { name, date, category, seats } = event;

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
          <h3>${name}</h3>
          <p>Date: ${date}</p>
          <p>Category: ${category}</p>
          <p>Seats Left: ${seats}</p>
          <button ${seats <= 0 ? 'disabled' : ''}>Register</button>
        `;

        const button = card.querySelector("button");
        button.addEventListener("click", () => {
          if (event.seats > 0) {
            event.seats--;
            alert(`Successfully registered for "${name}"!`);
            renderEvents(getAvailableEvents(events)); // update list
          }
        });

        container.appendChild(card);
      });
    };

    // Initial render
    renderEvents(getAvailableEvents(events));
  </script>
</body>
</html>
