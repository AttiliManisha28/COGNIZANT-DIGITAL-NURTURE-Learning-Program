<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal - DOM Manipulation</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #3F51B5;
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
      background-color: white;
      padding: 20px;
      margin-bottom: 20px;
      border-left: 6px solid #3F51B5;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .event-card button.cancel {
      background-color: #F44336;
      margin-left: 10px;
    }

    .event-card button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Portal - DOM Manipulation</h1>
  </header>

  <main>
    <div id="events-container"></div>
  </main>

  <script>
    // Sample data
    const events = [
      { id: 1, name: "Music Festival", date: "2025-06-20", category: "Music", seats: 5, registered: false },
      { id: 2, name: "Art Exhibition", date: "2025-06-25", category: "Art", seats: 3, registered: false },
      { id: 3, name: "Coding Bootcamp", date: "2025-07-01", category: "Education", seats: 2, registered: false }
    ];

    // Access DOM using querySelector
    const container = document.querySelector("#events-container");

    
    function renderEvents() {
      container.innerHTML = ''; // Clear previous
      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        const title = document.createElement("h3");
        title.textContent = event.name;

        const date = document.createElement("p");
        date.textContent = `Date: ${event.date}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${event.category}`;

        const seats = document.createElement("p");
        seats.textContent = `Seats Left: ${event.seats}`;

        const btnRegister = document.createElement("button");
        btnRegister.textContent = "Register";
        btnRegister.disabled = event.seats === 0 || event.registered;
        btnRegister.onclick = () => {
          if (event.seats > 0 && !event.registered) {
            event.seats--;
            event.registered = true;
            renderEvents();
            alert("You have registered successfully!");
          }
        };

        const btnCancel = document.createElement("button");
        btnCancel.textContent = "Cancel";
        btnCancel.classList.add("cancel");
        btnCancel.disabled = !event.registered;
        btnCancel.onclick = () => {
          if (event.registered) {
            event.seats++;
            event.registered = false;
            renderEvents();
            alert("Your registration has been cancelled.");
          }
        };

       
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(category);
        card.appendChild(seats);
        card.appendChild(btnRegister);
        card.appendChild(btnCancel);

        
        container.appendChild(card);
      });
    }

    
    renderEvents();
  </script>
</body>
</html>
