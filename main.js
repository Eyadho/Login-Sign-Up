// Get elements
const signInTab = document.getElementById('signInTab');
const signUpTab = document.getElementById('signUpTab');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToSignIn = document.getElementById('switchToSignIn');

// Function to show Sign In form
function showSignIn() {
    signInTab.classList.add('active');
    signUpTab.classList.remove('active');
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
}

// Function to show Sign Up form
function showSignUp() {
    signUpTab.classList.add('active');
    signInTab.classList.remove('active');
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
}

// Tab button events
signInTab.addEventListener('click', showSignIn);
signUpTab.addEventListener('click', showSignUp);

// Footer link events
switchToSignUp.addEventListener('click', showSignUp);
switchToSignIn.addEventListener('click', showSignIn);

// LocalStorage sign up
signUpForm.addEventListener('submit', function(e){
    e.preventDefault();

    // Get values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('emailSignUp').value;
    const password = document.getElementById('passwordSignUp').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    if(password !== repeatPassword){
        alert("Passwords do not match!");
        return;
    }

    // Save to localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('gender', gender);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Sign Up Successful! You can now Sign In.");
    showSignIn();
});

// LocalStorage sign in
signInForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('emailSignIn').value;
    const password = document.getElementById('passwordSignIn').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if(email === storedEmail && password === storedPassword){
        alert("Sign In Successful! 🎉");
    } else {
        alert("Email or Password is incorrect!");
    }
});