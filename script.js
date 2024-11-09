// // Simulate login by storing user info in localStorage
// function login() {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     if (username && email && password) {
//       // Save user data in localStorage
//       localStorage.setItem('username', username);
//       localStorage.setItem('email', email);
//       localStorage.setItem('password', password);
  
//       // Proceed to the next step
//       document.getElementById('login-page').style.display = 'none';
//       document.getElementById('student-details-page').style.display = 'block';
//     } else {
//       alert("Please fill out all fields.");
//     }
//   }
  
//   // Save student details and proceed to the complaint page
//   function submitStudentDetails() {
//     const usn = document.getElementById('usn').value;
//     const branchName = document.getElementById('branchName').value;
//     const semester = document.getElementById('semester').value;
  
//     if (usn && branchName && semester) {
//       // Save student details in session storage (for current session)
//       sessionStorage.setItem('usn', usn);
//       sessionStorage.setItem('branchName', branchName);
//       sessionStorage.setItem('semester', semester);
  
//       // Show complaint page
//       document.getElementById('student-details-page').style.display = 'none';
//       document.getElementById('complaint-page').style.display = 'block';
//     } else {
//       alert("Please fill out all fields.");
//     }
//   }
  
//   // Function to handle complaint submission
//   function submitComplaint() {
//     const complaint = document.getElementById('complaint').value;
  
//     if (complaint) {
//       alert("Complaint submitted successfully!");
//       // Clear inputs for next session
//       localStorage.clear();
//       sessionStorage.clear();
//       document.getElementById('complaint').value = '';
  
//       // Go back to login page
//       document.getElementById('complaint-page').style.display = 'none';
//       document.getElementById('login-page').style.display = 'block';
//     } else {
//       alert("Please enter a complaint.");
//     }
//   }
// Simulate login by storing user info in localStorage
function login() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username && email && password) {
      // Save user data in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      // Proceed to the next step
      document.getElementById('login-page').style.display = 'none';
      document.getElementById('student-details-page').style.display = 'block';
  } else {
      alert("Please fill out all fields.");
  }
}

// Save student details and proceed to the complaint page
function submitStudentDetails() {
  const usn = document.getElementById('usn').value;
  const branchName = document.getElementById('branchName').value;
  const semester = document.getElementById('semester').value;

  if (usn && branchName && semester) {
      // Save student details in session storage (for current session)
      sessionStorage.setItem('usn', usn);
      sessionStorage.setItem('branchName', branchName);
      sessionStorage.setItem('semester', semester);

      // Show complaint page
      document.getElementById('student-details-page').style.display = 'none';
      document.getElementById('complaint-page').style.display = 'block';
  } else {
      alert("Please fill out all fields.");
  }
}

// Function to handle complaint submission
function submitComplaint() {
  const complaint = document.getElementById('complaint').value;

  if (complaint) {
      // Hide the complaint input fields
      document.querySelector('.login-input-fields').style.display = 'none';

      // Show the confirmation message
      document.getElementById('confirmation-message').style.display = 'block';

      // Optionally clear inputs for next session after a short delay
      setTimeout(() => {
          localStorage.clear();
          sessionStorage.clear();
          document.getElementById('complaint').value = '';

          // Reset to the login page after showing the confirmation for a few seconds
          setTimeout(() => {
              document.getElementById('complaint-page').style.display = 'none';
              document.getElementById('login-page').style.display = 'block';
              document.getElementById('confirmation-message').style.display = 'none'; // Hide confirmation message
          }, 3000); // Adjust time as needed (3000 ms = 3 seconds)
      }, 2000); // Time to display the confirmation (2000 ms = 2 seconds)
  } else {
      alert("Please enter a complaint.");
  }
}
