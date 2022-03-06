// console.log('Hello world');

// value type
// string
var adiSoyadi = "Osman Mert";
var okulNumarasi = "123";
// number
var yasi = 22;
var boyu = 1.86;
// boolean
var sinaviGectiMi = true;
sinaviGectiMi = false;

// console.log(1 > 2 > 3);
// console.log(3 < 2 < 1);
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
// console.log(1 == '1')


// date
// var date = new Date(2022, 11, 01);
// console.log(date);

// undefined
// var a;
// console.log(a)


// referans type
// object
var araba = {
   marka: 'bmw',
   model: 2011,
   rengi: 'Kirmizi',
   motor: {
      gucu: '120PS',
      tipi: 'Dizel',
      bakimAraligi: {
         km: '10.000',
         zaman: '1 yil',
         yenilenmisMi: true,
         yenilemeZamani: new Date()
      }
   }
}

// console.log(araba.marka)
// console.log(araba.model)
// console.log(araba.motor.bakimAraligi.zaman)
// console.log(araba.motor.bakimAraligi)
// console.log(araba)

// array
var alisverisListesi = ['ekmek', 'süt', 'yumurta']

// console.log(alisverisListesi)
// console.log(alisverisListesi[3])
// console.log(alisverisListesi.length)

// for (var i = 0; i < alisverisListesi.length; i++) {
//    console.log('Liste elemani: ' + i)
// }

var liste = ['mahmut', 12, 12.56, true, { yasi: 25 }, [1, 2, 3], araba, alisverisListesi]

// console.log(liste)


// var a = "1";
// var b = "1";

// // console.log(true == false)

// var obj_1 = {};
// var obj_2 = {};

// console.log([] == [])


// Ctrl + K + C  comment 
// Ctrl + K + U  uncomment 

// var a = 'osman';
// // console.log(a);

// var b = a;
// console.log(b);
// b = 123;
// console.log(b);
// console.log(a);





// var a = {};

// var b = a;
// a.adi = 'abc';

// console.log(a);
// console.log(b);


// var tasit_1 = {
//    marka: 'bmw'
// // };

// var tasit_2 = tasit_1;


// tasit_2.modeli = 2012;

// console.log(tasit_1);

// console.log({} == {});








