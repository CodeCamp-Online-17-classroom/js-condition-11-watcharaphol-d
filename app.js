let user = prompt("Please enter your name:", "guest");
let password = null;
if (user === "codecamp") {
    password = prompt("Please enter your password:");
    if (password !== "123456") alert("Wrong password");
} else user = "guest";

alert(`Welcome ${user}`);