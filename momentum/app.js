const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
    //const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    // show the greeting
    paintGreetings(savedUsername);
}


/*const loginButton = loginForm.querySelector("button");
 function handleLoginBtnClick() {
    const username = loginInput.value;
     if (username === "") {
        alert("please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    } else {
        console.log("hello", loginInput.value);
    } 
    console.log(username);

}
loginButton.addEventListener("click", handleLoginBtnClick); */


/* const link = document.querySelector("a");
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!");
}

link.addEventListener("click", handleLinkClick); */
