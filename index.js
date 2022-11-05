function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    console.log(element.classList.value);
    if(element.classList.value === "dark-mode"){
        localStorage.setItem("dark-mode",true);
    }
    else{
      localStorage.removeItem("dark-mode");
    }
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



}    function loginTosever()
 {
    var username1 = document.getElementById("username").value;
    var password1 = document.getElementById("password").value;
    console.log( "username:",username1);
    console.log(typeof (password1));  
    $.ajax({
  type: "POST",
  // data: '{"username":"pupan"}, {"password":"1234"}',
  data: {
    username: username1,
    password: password1,
  },
  url: "https://6b06-54-254-153-143.ap.ngrok.io/login",
  cache: false,
  success: function (data) {
    console.log("object:",data.msg);
    if (  data.msg == "success")
    { 
        console.log(username1);
        window.location.replace("index.html");

    }
  },
  error: function (data) {
    console.log(data);
    alert("false");
  },

//   var s = document.getElementById(variable);
        // s.value = "new value";
});
}
function buttonEvent() {
    console.log(username)
    alert("true");
    // document.getElementById("A1").click();
    // console.log("click Event buttom html");


}