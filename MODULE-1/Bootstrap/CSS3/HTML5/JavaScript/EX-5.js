<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal - Objects & Prototypes</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #673AB7;
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
      background: #fff;
      border-left: 6px solid #673AB7;
      padding: 15px 20px;
      margin-bottom: 20px;
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

    .event-card button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    pre {
      background: #eee;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Portal - Objects & Prototypes</h1>
  </header>

  <main>
    <div id="events-container"></div>
    <h2>🔍 Event Object Keys & Values</h2>
    <pre id="object-info"></pre>
  </main>

  <script>
    
    class Event {
      constructor(id, name, date, category, seats) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.category = category;
        this.seats = seats;
      }
    }

    
    Event.prototype.checkAvailability = function () {
      return this.seats > 0 ? "Available" : "Full";
    };

    
    const events = [
      new Event(0, "First Aid Workshop", "2025-06-10", "Health", 5),
      new Event(1, "JavaScript Bootcamp", "2025-06-18", "Education", 0),
      new Event(2, "Photography Contest", "2025-07-01", "Art", 8)
    ];

    
    const container = document.getElementById("events-container");

    events.forEach(event => {
      const div = document.createElement("div");
      div.className = "event-card";

      div.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Category: ${event.category}</p>
        <p>Seats: ${event.seats} (${event.checkAvailability()})</p>
        <button onclick="register(${event.id})" ${event.seats === 0 ? "disabled" : ""}>Register</button>
      `;

      container.appendChild(div);
    });

    
    function register(id) {
      const event = events.find(e => e.id === id);
      if (event && event.seats > 0) {
        event.seats--;
        alert("Successfully registered!");
        location.reload(); // Reload to reflect UI update
      } else {
        alert("Event is full.");
      }
    }

    
    const objectInfo = document.getElementById("object-info");
    const firstEventEntries = Object.entries(events[0]);

    let output = "";
    firstEventEntries.forEach(([key, value]) => {
      output += `${key}: ${value}\n`;
    });

    objectInfo.textContent = output;
  </script>
</body>
</html>
