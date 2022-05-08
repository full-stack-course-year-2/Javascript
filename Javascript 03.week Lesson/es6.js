//SCOPE

  // Global Scope

var ad = "Ali";
// console.log(ad);

var localScope = "Global Scopetayım";

    //Local Scope

function adim() {
    var localScope = "Local Scoptayım";
    console.log(localScope);
}

// adim();

// console.log(localScope);

    //Block Scope

for(let i = 0; i<10; i++) {
    console.log(i);
}

console.log(i); 
// hata alırız çünkü globalde i değişkeni tanımlanmamıştır
// for içinde let bizlere block scope oluşturmamızı sağlar.
//var ile let arasındaki esas fark budur.

//ES6
// let ve const
    //let
var item = "İtemın adı";
var item = "isim";
item = "ali";
// console.log(item);

let greeting = {
    message: "say Hi",
    times: 4
};
greeting.message = "Merhaba";
// console.log(greeting);

greeting = {
    message: "Hallo",
    times: 8
};


let dersAdi = "Javascript ES6";
dersAdi = "Javascript";

// console.log(dersAdi);

// let i = 0;

// for(i = 1; i < 10; i++) {
//         console.log(i);
//     }

// console.log(i);


    //const

// const i = 12344;
// i = 152;
// console.log(i);

// console.log(i);

const topla = function(s1, s2, s3) {
    return s1 + s2 + s3;
};

// console.log(topla(5, 8, 7));
// console.log(topla(7, 9, 3));

// function topla(s1, s2) {
//     let result = s1 + s2;
//     return result;
// }

// console.log(topla(6,9));

// const greeting = {
//     message: "say Hi",
//     times: 4
// };
// greeting.message = "Merhaba";
// console.log(greeting);

// greeting = {
//     message: "Hallo",
//     times: 8
// };

var isim = "Mahmut";
let isim3 = "veli";
const isim4 = "kemal";

if(true) {
    var isim2 = "Mehmet";
    let isim3 = "İsmail";
    const isim4 = "Ahmet";
    // console.log(isim3);
    // console.log(isim4);
}

// console.log(isim);
// console.log(isim2);
// console.log(isim3);
// console.log(isim4);

// Arrow functions

const bolme = function(s1, s2) {
    return s1/s2;
}

const bolmee = (s1, s2) => {
    return s1 / s2;
}

const bolmeIslemi = (s1, s2) =>  s1 / s2 ;

// console.log(bolmeIslemi(10,2));

const ortalama = (s1,s2,s3) => ( s1 + s2 + s3 ) / 3 ;

// console.log(ortalama(13,24,45));

// spread operator ...

const arr = ['Javascript', 'EcmaScript6', 'Python', 'HTML'];

console.log(arr);

console.log(...arr);

let dizi = [...arr];
console.log(dizi);

const arr2 = [...arr , 'CSS' , ]