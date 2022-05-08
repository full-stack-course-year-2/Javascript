//DOM Secimlerin Devamı

let email = document.querySelector("#e-mail");

email.innerHTML = "Email Adresinizi Giriniz";
email.style.color = "red";
email.style.fontSize = "2rem";

let passWord = document.querySelectorAll(".form-label")[1];

passWord.innerText = "Şifrenizi Giriniz";
passWord.setAttribute("id", "pass");
// console.log(passWord);

let pass2 = document.querySelector("#pass");
pass2.style.color = "blue";

let exp = document.getElementById("blog-test");

console.log(exp.innerHTML);
console.log(exp.innerText);
console.log(exp.textContent);

//

