function login(){

const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;

const students = {
"1001":"1234",
"1002":"1234",
"1003":"1234"
};

if(students[user] && students[user] === pass){

localStorage.setItem("student", user);

window.location.href = "dashboard.html";

}else{

document.getElementById("error").innerText = "Invalid Login";

}

}