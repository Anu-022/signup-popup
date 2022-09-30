//open the signup form
let signUp = document.querySelector(".signup-link");

//signup div
let  signUpForm = document.querySelector(".open-form");

//close btn
let closeBtn = document.querySelector('.close-btn');
// container div
let backgroundText = document.querySelector('.hero-text');

//function to display form
function openSignUp(event) {
    event.preventDefault();
    signUpForm.style.display = 'block';
    backgroundText.classList.add('blur');

}

function closeSignUp(event) {
    event.preventDefault();
    backgroundText.classList.remove('blur');
    signUpForm.style.display = 'none';
}

signUp.addEventListener('click', openSignUp);
closeBtn.addEventListener('click', closeSignUp);


