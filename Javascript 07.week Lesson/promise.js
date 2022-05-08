//newTodo işlemi bittiken sonra todoList i çalıştıralım

// const todos = [
//   { title: "todo1", description: "konu tekrarı yapılacak" },
//   { title: "todo2", description: "alıştırmalar çözülecek" },
//   { title: "todo3", description: "ödev yapılacak" },
// ];

// function todoList() {
//   setTimeout(() => {
//     todos.forEach((item) => {
//       console.log(item);
//     });
//   }, 2000);
// }

// function newTodo(todo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos.push(todo);
//       const eror = true;
//       if (!eror) {
//         resolve();
//       } else {
//         reject("Hata var..");
//       }
//     }, 3000);
//   });
// }

// newTodo({
//   title: "todo4",
//   description: "yeni görev",
// })
//   .then((response) => {
//     todoList();
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.all
// içinde tanımlanan tüm promise lere isteği gönderir
// ve hepsi tamamlandığında bize geri dönüş yapar

const p1 = Promise.resolve("P1");

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ben 2. promisim");
  }, 2000);
});

const p3 = 123112424;

Promise.all([p1, p2, p3]).then((promises) => {
  console.log(promises);
});
