console.log('Merhaba Dünya');


// değişken tipi + değişken ismi = değişken değeri
var nameStr = "Yavuz";
var age = 99;

nameStr = "Ercan";
age = 20;

console.log("Ad: " + nameStr + " Yaşi: " + age);

//Alt + Shift + F

/*
== eşit ise
=== veri tipi dahil eşitlik
!= eşit değilse
!== veri tipi dahil eşit değilse
< küçüktür
> büyüktür
<= küçük eşit
>= büyük eşit
*/

var num1 = 1;
var num2 = 1;
var num3 = 2;

console.log((num1 == num3));

/* 
&& ve
|| veya
*/


//false       ||    true
console.log((num1 == num3) || (num1 == num2));

if (num1 == num3) {
   console.log("Bunlar eşittir.")
} else {
   console.log("Bunlar eşit değildir.")
}




// Döngü
//   başlangıç= 0;   duracağımız nokta =9;   yolda nasıl gidicez=(++)1er 1er artır
for (var i = 0;          i < 10;               i++) {
   console.log("i sayisi : " + i);
}

for (var num = 20; num >= 0; num--) {
    console.log("Num sayisi : " + num);
}


