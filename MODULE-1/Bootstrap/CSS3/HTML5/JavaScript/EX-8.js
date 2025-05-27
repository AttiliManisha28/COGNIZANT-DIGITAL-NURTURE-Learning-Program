<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Portal - Event Handling</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f7f9fc;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #00695c;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    main {
      max-width: 900px;
      margin: 30px auto;
      padding: 20px;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    input, select {
      padding: 8px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 48%;
    }

    .event-card {
      background-color: white;
      padding: 20px;
      margin-bottom: 15px;
      border-left: 6px solid #00695c;
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

    .event-card button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Portal - Event Handling</h1>
  </header>

  <main>
    <div class="controls">
      <input type="text" id="searchInput" placeholder="Search by event name..." />
      <select id="categoryFilter">
        <option value="all">All Categories</option>
        <option value="Music">Music</option>
        <option value="Art">Art</option>
        <option value="Education">Education</option>
      </select>
    </div>

    <div id="events-container"></div>
  </main>

  <script>
    const events = [
      { id: 1, name: "Jazz Music Fest", date: "2025-06-20", category: "Music", seats: 3 },
      { id: 2, name: "Painting Workshop", date: "2025-06-25", category: "Art", seats: 2 },
      { id: 3, name: "JavaScript Bootcamp", date: "2025-07-01", category: "Education", seats: 5 },
      { id: 4, name: "Classical Night", date: "2025-06-30", category: "Music", seats: 0 }
    ];

    const container = document.querySelector("#events-container");
    const searchInput = document.querySelector("#searchInput");
    const categoryFilter = document.querySelector("#categoryFilter");

    // Register onclick event for filtering and searching
    categoryFilter.onchange = filterAndRender;
    searchInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        filterAndRender();
      }
    });

    function renderEvents(eventList) {
      container.innerHTML = '';

      if (eventList.length === 0) {
        container.innerHTML = '<p>No events found.</p>';
        return;
      }

      eventList.forEach(event => {
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
        btnRegister.disabled = event.seats <= 0;

        btnRegister.onclick = function() {
          if (event.seats > 0) {
            event.seats--;
            alert(`You registered for "${event.name}"!`);
            filterAndRender(); // Re-render to reflect change
          }
        };

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(category);
        card.appendChild(seats);
        card.appendChild(btnRegister);

        container.appendChild(card);
      });
    }

    function filterAndRender() {
      const keyword = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;

      let filtered = events.filter(event => {
        const matchesName = event.name.toLowerCase().includes(keyword);
        const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
        return matchesName && matchesCategory;
      });

      renderEvents(filtered);
    }

    
    filterAndRender();
  </script>
</body>
</html>
