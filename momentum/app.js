const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick() {
    const username = loginInput.value;
    /* if (username === "") {
        alert("please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    } else {
        console.log("hello", loginInput.value);
    } */
    console.log(username);

}

//loginButton.addEventListener("click", handleLoginBtnClick);