<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Community Event Portal - jQuery Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f7f9;
      margin: 0;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #34495e;
    }
    #events-container {
      max-width: 700px;
      margin: 20px auto;
    }
    .event-card {
      background: white;
      border-radius: 8px;
      padding: 15px 20px;
      margin-bottom: 15px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      display: none; /* Initially hidden for fadeIn demo */
    }
    .event-card h3 {
      margin: 0 0 10px 0;
      color: #2c3e50;
    }
    .event-card p {
      margin: 0 0 10px 0;
      color: #7f8c8d;
    }
    .register-btn {
      background: #2980b9;
      color: white;
      border: none;
      padding: 8px 14px;
      border-radius: 4px;
      cursor: pointer;
    }
    .register-btn:hover {
      background: #1c5980;
    }
  </style>
</head>
<body>
  <h1>Community Events (jQuery Demo)</h1>
  <div id="events-container"></div>

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    // Sample event data
    const events = [
      { id: 1, name: "Food Festival", date: "2025-06-10", category: "Food", seats: 30 },
      { id: 2, name: "Tech Meetup", date: "2025-06-20", category: "Technology", seats: 15 },
      { id: 3, name: "Nature Walk", date: "2025-07-05", category: "Outdoors", seats: 25 },
    ];

    
    function renderEvents() {
      const container = $('#events-container');
      container.empty(); // Clear previous events
      events.forEach(event => {
        const card = $(`
          <div class="event-card" data-id="${event.id}">
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Category: ${event.category}</p>
            <p>Seats Available: <span class="seats">${event.seats}</span></p>
            <button class="register-btn" id="registerBtn-${event.id}">Register</button>
          </div>
        `);
        container.append(card);
        card.fadeIn(600); // Fade in each card
      });
    }

    // Initial render
    $(document).ready(function() {
      renderEvents();

      
      $('#events-container').on('click', '.register-btn', function() {
        const card = $(this).closest('.event-card');
        const eventId = Number(card.data('id'));
        const eventObj = events.find(e => e.id === eventId);

        if (!eventObj) {
          alert('Event not found!');
          return;
        }

        if (eventObj.seats > 0) {
          eventObj.seats--;
          card.find('.seats').text(eventObj.seats);

          alert(`Successfully registered for ${eventObj.name}!`);

         
          if (eventObj.seats === 0) {
            card.fadeOut(800);
          }
        } else {
          alert('Sorry, no seats available.');
          card.fadeOut(800); 
        }
      });
    });

  </script>
</body>
</html>
