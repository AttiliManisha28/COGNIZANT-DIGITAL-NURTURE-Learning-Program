<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Community Event Registration</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f0f8ff;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #2196F3;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    main {
      max-width: 600px;
      margin: 30px auto;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    h2 {
      color: #333;
    }

    p {
      font-size: 16px;
    }

    .btn-group {
      margin-top: 20px;
    }

    button {
      padding: 10px 20px;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
      font-size: 16px;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    #seat-count {
      font-weight: bold;
      font-size: 18px;
      color: #444;
    }
  </style>
</head>
<body>
  <header>
    <h1>Event Registration</h1>
  </header>

  <main>
    <h2 id="event-info"></h2>
    <p>Available Seats: <span id="seat-count"></span></p>

    <div class="btn-group">
      <button onclick="register()">Register</button>
      <button onclick="cancel()">Cancel Registration</button>
    </div>
  </main>

  <script>
    
    const eventName = "Community Art Workshop";
    const eventDate = "June 10, 2025";

    
    let availableSeats = 5;

    
    document.getElementById("event-info").innerText = `${eventName} - ${eventDate}`;
    document.getElementById("seat-count").innerText = availableSeats;

    function register() {
      if (availableSeats > 0) {
        availableSeats--; 
        updateSeats();
      } else {
        alert("Sorry, no seats available!");
      }
    }

    function cancel() {
      availableSeats++; 
      updateSeats();
    }

    function updateSeats() {
      document.getElementById("seat-count").innerText = availableSeats;
    }
  </script>
</body>
</html>
