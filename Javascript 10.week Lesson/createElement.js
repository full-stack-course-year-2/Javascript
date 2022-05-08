let div1 = document.createElement("div");
div1.className = "container";

let div2 = document.createElement("div");
div2.className = "row";

let div3 = document.createElement("div");
div3.className = "col-md-1 mt-5";

let button = document.createElement("button");
button.type = "button";
button.className = "btn btn-primary";
button.innerText = "Buton";
button.setAttribute("id", "degistir");

document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(button);

let div4 = document.createElement("div");
div4.className = "col-md-5 mt-5";

div2.appendChild(div4);

let img = document.createElement("img");
img.className = "img-fluid";
img.src =
  "https://pixabay.com/get/g369f463b2a6ec367350514c758b91f7c952cf7467ee8d1d8fad1c3fcc2c83d4c18c840cc18a2493a3d324f303ef2337c05f2812c148ea5cab026175ce5364a3e354f728124281c48a93d9cc880543a17_640.jpg";
img.style.height = "475px";
div4.appendChild(img);

button.addEventListener("click", () => {
  img.src =
    "https://pixabay.com/get/ga75d8686e2c808e2a433297245c7cee8f8620583647bb4b30405a0c8fb4a06d4e13c7677c8c2aeea3c5bef353483aef7706002e627c200f66ce1e20aeb59dfd193b01781960eaee615dcc00ef463af4b_640.jpg";
});

