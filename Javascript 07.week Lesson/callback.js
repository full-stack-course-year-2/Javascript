// setTimeout

// function adYaz(ad) {
//   setTimeout(() => {
//     console.log(ad);
//   }, 2000);
// }

// adYaz("Ahmet");

//-------------------------------------------------------

// const topla = (num1, num2) => {
//   return num1 + num2;
// };

// const displayer = (islem) => {
//   setTimeout(() => {
//     console.log(islem);
//   }, 4000);
// };

// displayer(topla(2, 4));

//-------------------------------------------------------

// function loginOl(ikinciIslem) {
//   setTimeout(() => {
//     console.log("login başarılı..");
//     ikinciIslem();
//   }, 2000);
// }

// function listele() {
//   setTimeout(() => {
//     console.log("ilanlar listelendi..");
//   }, 1000);
// }

// loginOl(listele);

//-------------------------------------------------------

// function adYaz(ad, callback) {
//   setTimeout(() => {
//     console.log(ad);
//     callback();
//   }, 2000);
// }

// function soyadYaz(soyad) {
//   setTimeout(() => {
//     console.log(soyad);
//   }, 1000);
// }

// adYaz("İbrahim", soyadYaz);

//-------------------------------------------------------

const todos = [
  { title: "todo1", description: "konu tekrarı yapılacak" },
  { title: "todo2", description: "alıştırmalar çözülecek" },
  { title: "todo3", description: "ödev yapılacak" },
];

function todoList() {
  setTimeout(() => {
    todos.forEach((item) => {
      console.log(item);
    });
  }, 2000);
}

function newTodo(todo, next) {
  setTimeout(() => {
    todos.push(todo);
    next();
  }, 3000);
}

// newTodo fonksiyonuna parametre olarak bir obje gönderdik,
// bu objeyi todo parametresiyle gönderdik,
// todoList i de callback parametresiyle callback fonksiyon olarak çağırdık

newTodo(
  {
    title: "todo4",
    description: "yeni görev",
  },
  todoList
);
