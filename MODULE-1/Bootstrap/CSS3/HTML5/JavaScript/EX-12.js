<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Community Event Portal - AJAX Registration</title>
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

    button:disabled {
      background-color: #999;
      cursor: not-allowed;
    }

    .success-message {
      margin-top: 20px;
      color: #388e3c;
      font-weight: 600;
    }

    .loading-spinner {
      margin-top: 15px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #1976d2;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      animation: spin 1s linear infinite;
      display: none;
    }

    @keyframes spin {
      0% { transform: rotate(0deg);}
      100% { transform: rotate(360deg);}
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

    <div class="loading-spinner" id="loading-spinner"></div>

    <div id="response-message" class="success-message" role="alert" aria-live="polite"></div>
  </main>

  <script>
    const form = document.getElementById('registration-form');
    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
    const eventSelect = form.elements['event'];

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const eventError = document.getElementById('event-error');
    const responseMessage = document.getElementById('response-message');
    const loadingSpinner = document.getElementById('loading-spinner');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Clear previous messages
      nameError.style.display = 'none';
      emailError.style.display = 'none';
      eventError.style.display = 'none';
      responseMessage.textContent = '';
      responseMessage.style.color = '#388e3c';

      let valid = true;

      // Validation
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

      if (!valid) return;

      // Prepare data
      const data = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        event: eventSelect.value
      };

      // Disable button and show spinner
      submitBtn.disabled = true;
      loadingSpinner.style.display = 'inline-block';

      // Mock API URL (using JSONPlaceholder as example)
      const mockUrl = 'https://jsonplaceholder.typicode.com/posts';

      // Simulate network delay with setTimeout wrapped in a Promise
      const delayedFetch = (url, options) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate 90% success, 10% failure randomly
            if (Math.random() < 0.9) {
              fetch(url, options)
                .then(res => {
                  if (!res.ok) throw new Error('Network response was not ok');
                  return res.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
            } else {
              reject(new Error('Simulated network error'));
            }
          }, 1500); // 1.5 seconds delay
        });
      };

      delayedFetch(mockUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(responseData => {
          responseMessage.style.color = '#388e3c'; // green
          responseMessage.textContent = `Thank you, ${data.name}! Your registration for "${data.event}" was successful.`;
          form.reset();
        })
        .catch(error => {
          responseMessage.style.color = '#d32f2f'; // red
          responseMessage.textContent = `Registration failed: ${error.message}`;
        })
        .finally(() => {
          submitBtn.disabled = false;
          loadingSpinner.style.display = 'none';
        });
    });
  </script>
</body>
</html>
