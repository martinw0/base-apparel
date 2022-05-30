var email = document.getElementsByClassName("email")[0];
var form = document.getElementsByClassName("form")[0];
document.querySelector(".form .btn").addEventListener("click", function (event) {
  if(email.validity.typeMismatch) {
    form.classList.add("error");
  } else {
      form.classList.remove("error");
  }
});