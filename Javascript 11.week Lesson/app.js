// API -- Application program interface

// JSON -- Javascript Object Notation

/* json içersinde bilgiler şu şekilde saklanabilir

    string 
    number
    array
    obj
    boolean
*/

/* CRUD istekleri

  islem       api
 Creat       post
 Read        get 
 Update      put
 Delete      delete

*/

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const users = axios.get("https://jsonplaceholder.typicode.com/users");
// users.then((response) => console.log(response));

// const todos = axios.get("https://jsonplaceholder.typicode.com/todos");

// todos.then((response) => console.log(response.data));

//post

// const newTodo = axios.post("https://jsonplaceholder.typicode.com/todos", {
//   userId: 1,
//   id: 1,
//   title: "yenikayit",
//   completed: false,
// });

// newTodo.then((res) => console.log(res));

//put

// const kayitGuncelleme = axios.put(
//   "https://jsonplaceholder.typicode.com/todos/1",
//   {
//     id: 4,
//     title: "kayıt güncellendi",
//   }
// );

// kayitGuncelleme.then((res) => console.log(res));

//delete

// const kayıtSil = axios.delete("https://jsonplaceholder.typicode.com/todos/1");

// kayıtSil.then((res) => console.log(res));

//patch

// const degistir = axios.patch("https://jsonplaceholder.typicode.com/todos/1", {
//   mesaj: "patch ile mesaj eklendi",
// });

// degistir.then((res) => console.log(res));
