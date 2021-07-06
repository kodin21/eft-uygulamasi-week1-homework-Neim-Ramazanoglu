import { name } from "./example-other-file";
//countdown function
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      location.reload();
      alert("Oturumunuz sonlanmıştır!");
    }
  }, 1000);
}

window.onload = function () {
  var twoMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};

let element = document.getElementById("dropdown");

element.addEventListener("change", (e) => {
  let checkedValue = e.target.value;
  document.getElementById("bakiye").innerHTML = "Mevcut Bakiyeniz " + checkedValue + " TL";
});
let ibanInput = document.querySelector("#IBAN");
let tutarInput = document.querySelector("#tutar");
tutarInput.addEventListener("change", amountChange);
function amountChange() {
  let checkedValue = Number(document.getElementById("dropdown").value);
  let valueInput = Number(tutarInput.value);

  if (valueInput > checkedValue) {
    alert("Bakiyenizden fazla tutar girdiniz!");
  }
}

let formChange = document.getElementById("container");

formChange.addEventListener("input", (f) => {
  let checkedValue = document.getElementById("dropdown").value;
  let valueInput = Number(tutarInput.value);
  let ibanValue = (ibanInput.value);
  if (valueInput > 0 && checkedValue !== "" && valueInput < checkedValue && ibanValue !== "") {
    document.getElementById("myBtn").disabled = false;
  }else{
    document.getElementById("myBtn").disabled = true;
  }
});

let send = document.querySelector("#myBtn");
send.addEventListener("click", sendSuccess);
function sendSuccess() {
  let valueInput = Number(tutarInput.value);
 

  if (valueInput < 500) {
    document.getElementById("success").style.display = "block";
    document.getElementById("container").style.display = "none";
  } else {
    document.getElementById("notSuccess").style.display = "block";
    document.getElementById("container").style.display = "none";
  }
}

let refresh = document.querySelector("#successBtn");
refresh.addEventListener("click", quitPopUp);
function quitPopUp() {
  document.getElementById("success").style.display = "none";
  document.getElementById("container").style.display = "block";

  
}
let login_attempts = 3;
let validate = document.querySelector("#notSuccessBtn");
validate.addEventListener("click", validation);
function validation() {
  
  let password = document.getElementById("pass").value;
  login_attempts = login_attempts - 1;
  if (password == 1234) {
    document.getElementById("success").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("notSuccess").style.display = "none";
  } else {
    if (login_attempts == 0) {
        document.getElementById("notSuccessBtn").disabled ="true";
      alert("No Login Attempts Available");
      
      
    } else {
      
      document.getElementById("nots1").innerHTML = "Hatalı Deneme " + login_attempts + 
      " adet hakkınız kaldı."
      
    }
  }

}

  