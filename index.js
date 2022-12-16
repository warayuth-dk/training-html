
 function usernameStock() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "dukdik" && password === "123456") {
        alert("Success");
    }
    else {
        alert("fail");

    }
}
function buttonEvent() {
    alert("true");
    // document.getElementById("A1").click();



}    function loginTosever()
 {
    var username1 = document.getElementById("username").value;
    var password1 = document.getElementById("password").value;
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
    if (  data.msg == "success")
    { 
        window.location.replace("index.html");

    }
  },
  error: function (data) {
    alert("false");
  }
});