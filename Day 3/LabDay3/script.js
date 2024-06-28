// ========================================
// Task 1:
// ----------
function startClock()
{
    var interval=  setInterval(function(){
    var date = new Date();
    document.getElementById("clock").innerHTML=date.toLocaleTimeString();
  },1000)
}
// ========================================
// Task 2:
// ----------
var adWindow;
function openAdWindow()
{
    //open ("url","name or attribute (_blank by defualt)","specifications (width,height,menubar ,..)","Replace history")
    setTimeout(function () {
      adWindow = open("ads.html","_blank","width=400,height=400");
      console.log(adWindow)
    }, 3000) 

}
function closeAdWindow()
{
  if (adWindow && !adWindow.closed) {
    adWindow.close()
  }
  // window.close()
}
// ========================================
// Task 5:
// ----------
var emailRegex = /^[\w.]{3,}@[a-zA-Z0-9.]{2,}\.[a-zA-Z]{2,10}$/g
var phoneRegex = /^\+\d{12}$/

function checkEmail() {
  email = document.getElementById("email").value
  document.getElementById("emailres").textContent = emailRegex.test(email)
}
function checkPhoneNum() {
  phone = document.getElementById("phone").value
  document.getElementById("phoneres").textContent = phoneRegex.test(phone)
}