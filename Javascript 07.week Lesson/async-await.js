// Example 1

// const durum = true;
// const user = { id: 1, adi: "Mahmut" };

// function login() {
//   return new Promise((resolve, reject) => {
//     if (durum) {
//       setTimeout(() => {
//         resolve(user);
//       }, 2000);
//     } else {
//       reject("Kullanıcı bulunamadı..");
//     }
//   });
// }

// function listele() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("ilanlar listelendi"));
//     }, 1000);
//   });
// }

// async function islemAkisi() {
//   await login()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => console.log(e));
//   listele().then((data1) => {
//     console.log("data1 geldi");
//   });
// }

// islemAkisi();

// Example 2

// datayı database den almak itiyoruz ancak 3 sn sürecek
// aldıktan sonra da bir fonksiyonla foreach ile yazdıracağız

const data = [];
const durum = true;

const dataLoader = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = require("./data");
      data.push(users);
      if (durum) {
        resolve();
      } else {
        reject("Hata var.. Data yüklenemedi..");
      }
    }, 3000);
  });
};

const dataPrinter = () => {
  setTimeout(() => {
    data.forEach((i) => console.log(i));
  }, 2000);
};

async function runTime() {
  await dataLoader();
        dataPrinter();
}

runTime();
