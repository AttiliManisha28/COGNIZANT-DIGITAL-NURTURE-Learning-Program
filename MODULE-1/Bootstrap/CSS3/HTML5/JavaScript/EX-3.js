<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Upcoming Community Events</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #eef6f9;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #0288D1;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    main {
      max-width: 800px;
      margin: 30px auto;
      padding: 20px;
    }

    .event-card {
      background: #fff;
      border-left: 6px solid #0288D1;
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

    .event-card button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <header>
    <h1>Upcoming Community Events</h1>
  </header>

  <main id="events-container">
    <!-- Events will be dynamically inserted here -->
  </main>

  <script>
    const events = [
      { name: "Yoga in the Park", date: "2025-06-15", seats: 10 },
      { name: "Tech Meetup", date: "2025-05-01", seats: 0 },
      { name: "Art Exhibition", date: "2025-07-05", seats: 5 },
      { name: "Cooking Workshop", date: "2025-04-20", seats: 2 },
      { name: "Community Cleanup", date: "2025-06-20", seats: 0 },
    ];

    const today = new Date();
    const container = document.getElementById('events-container');

    events.forEach((event, index) => {
      const eventDate = new Date(event.date);
      
      if (eventDate > today && event.seats > 0) {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event-card';

        eventDiv.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Available Seats: <span id="seats-${index}">${event.seats}</span></p>
          <button onclick="register(${index})">Register</button>
        `;

        container.appendChild(eventDiv);
      }
    });

    function register(index) {
      try {
        if (!events[index]) throw new Error("Event does not exist.");

        if (events[index].seats > 0) {
          events[index].seats--;
          document.getElementById(`seats-${index}`).innerText = events[index].seats;
          alert("Successfully registered!");
        } else {
          alert("Sorry, this event is full.");
        }
      } catch (err) {
        console.error("Registration error:", err.message);
        alert("An error occurred while registering.");
      }
    }
  </script>
</body>
</html>
