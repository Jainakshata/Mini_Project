let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

const firebaseConfig = { 
    apiKey: "AIzaSyBdBgGzlni7eS6eipecBmJ88zFbANqOD-4",
    authDomain: "fpd-auth.firebaseapp.com",
    projectId: "fpd-auth",
    storageBucket: "fpd-auth.appspot.com",
    messagingSenderId: "437331475954",
    appId: "1:437331475954:web:174ef1eec86dc864ac3f6b"
  };
	///apli api id tak
  

  firebase.initializeApp(firebaseConfig);
  
  
  // Reference to the signup form and its elements
  const signUpForm = document.querySelector('.sign-up');
  const usernameInput = signUpForm.querySelector('input[name="username"]');
  const emailInput = signUpForm.querySelector('input[name="email"]');
  const passwordInput = signUpForm.querySelector('input[name="password"]');
  const confirmPasswordInput = signUpForm.querySelector('input[name="confirm password"]');
  const signUpButton = signUpForm.querySelector('#create-acct-btn');

  // Function to handle user signup
  signUpButton.addEventListener('click', function() {
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("User signed up successfully!");
        // You can redirect the user or do any other actions here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  // Reference to the login form and its elements
  const signInForm = document.querySelector('.sign-in');
  const usernameInput1 = signInForm.querySelector('input[type="text"]');
  const passwordInput1 = signInForm.querySelector('input[type="password"]');
  const loginButton = signInForm.querySelector('button');

  // Function to handle user login
  loginButton.addEventListener('click', function() {
    const username = usernameInput1.value;
    const password = passwordInput1.value;

    // Sign in existing user with email and password
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("User logged in successfully!");
        window.location.href = 'aboutus.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
