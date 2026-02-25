const student = localStorage.getItem("student");

document.getElementById("studentID").innerText = student;

function logout(){
localStorage.removeItem("student");
window.location.href = "login.html";
}