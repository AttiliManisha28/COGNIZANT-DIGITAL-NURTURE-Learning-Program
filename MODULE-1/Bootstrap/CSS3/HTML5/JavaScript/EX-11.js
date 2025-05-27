<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Community Event Portal - Registration Form</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #eef2f7;
      margin: 0; padding: 0;
    }

    header {
      background-color: #1565c0;
      color: white;
      text-align: center;
      padding: 20px 0;
    }

    main {
      max-width: 600px;
      margin: 30px auto;
      background: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h1 {
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-top: 15px;
      font-weight: 600;
    }

    input, select {
      margin-top: 6px;
      padding: 8px 12px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline-color: #1565c0;
    }

    .error-message {
      color: #d32f2f;
      font-size: 0.875rem;
      margin-top: 4px;
      display: none;
    }

    button {
      margin-top: 25px;
      padding: 12px;
      background-color: #1976d2;
      color: white;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0d47a1;
    }

    .success-message {
      margin-top: 20px;
      color: #388e3c;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <header>
    <h1>Community Event Registration</h1>
  </header>

  <main>
    <form id="registration-form" novalidate>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your full name" />
      <div id="name-error" class="error-message">Please enter your name.</div>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="your.email@example.com" />
      <div id="email-error" class="error-message">Please enter a valid email.</div>

      <label for="event-select">Select Event</label>
      <select id="event-select" name="event">
        <option value="">-- Select an Event --</option>
        <option value="Food Festival">Food Festival</option>
        <option value="Tech Meetup">Tech Meetup</option>
        <option value="Nature Walk">Nature Walk</option>
      </select>
      <div id="event-error" class="error-message">Please select an event.</div>

      <button type="submit">Register</button>
    </form>

    <div id="success-message" class="success-message" role="alert" aria-live="polite"></div>
  </main>

  <script>
    const form = document.getElementById('registration-form');
    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
    const eventSelect = form.elements['event'];

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const eventError = document.getElementById('event-error');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      
      nameError.style.display = 'none';
      emailError.style.display = 'none';
      eventError.style.display = 'none';
      successMessage.textContent = '';

      let valid = true;

      
      if (!nameInput.value.trim()) {
        nameError.style.display = 'block';
        valid = false;
      }

      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        valid = false;
      }

      
      if (!eventSelect.value) {
        eventError.style.display = 'block';
        valid = false;
      }

      if (valid) {
        // On successful validation
        successMessage.textContent = `Thank you, ${nameInput.value.trim()}! You have registered for "${eventSelect.value}".`;

        // Reset form after successful submission
        form.reset();
      }
    });
  </script>
</body>
</html>
