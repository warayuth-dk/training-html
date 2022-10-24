function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function usernameStock() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password);
    console.log(typeof (password));
    if (username === "dukdik" && password === "123456") {
        alert("Hello");
    }
    else {
        alert("fuck you");

    }
}
function buttonEvent() {
    alert("true");
    // document.getElementById("A1").click();
    // console.log("click Event buttom html");


}