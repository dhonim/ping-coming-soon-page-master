const errMsgEl = document.getElementById("errMsg");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("form input");


// console.log(formEl);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailToValidate = inputEl.value;
  if (validateEmail(emailToValidate)) {
    errMsgEl.classList.add('hidden')
    inputEl.classList.remove("border-red-400")
   alert("You are welcome my Friend")
  } else {
     errMsgEl.classList.remove('hidden')
     inputEl.classList.add("border-red-400")
  }
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }