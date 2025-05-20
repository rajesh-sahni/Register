// Signup form handling
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        window.location.href = "signin.html";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during signup");
    }
  });
}

// Signin form handling
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Create a welcome message
        const formBox = document.querySelector(".form-box");
        formBox.innerHTML = `
                    <div class="welcome-message">
                        <h2>Welcome, ${data.user.name}!</h2>
                        <p>You have successfully signed in.</p>
                        <p>Email: ${data.user.email}</p>
                        <button onclick="location.reload()">Sign Out</button>
                    </div>
                `;
      } else {
        alert(data.message || "Signin failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during signin");
    }
  });
}
