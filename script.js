// Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Form validation
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return;
      }
      alert("Message sent successfully!");
      this.reset();
    });