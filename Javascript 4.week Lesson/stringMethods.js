// STRING METHODS

// lenght , bir stringin uzunluğunu döndürür.

const fruits = "Muz, Portakal, Elma, Çilek, Karpuz";
console.log(fruits.length);

// slice() , bir stringin bir bölümünü çıkarır ve çıkarılan bölümü yeni bir stringe döndürür.
  // 2 parametre alır: başlangıç ​​konumu ve bitiş konumu (bitiş dahil değildir).

console.log(fruits.slice(5,14));

    // Bir parametre negatifse, konum dizenin sonundan sayılır.

//console.log(fruits.slice(-10,-5));

// substring() , slice() ile benzerdir. Aradaki fark, substring() negatif dizinleri kabul etmemektedir.

console.log(fruits.substring(5,14));

// substr() , slice() ile benzerdir. Aradaki fark, ikinci parametrenin çıkarılan parçanın uzunluğunu belirtmesidir.

console.log(fruits.substr(5, 14));

// replace() , belirtilen bir değeri bir stringteki başka bir değerle değiştirir.
    // yalnızca ilk eşleşenin değerini değiştirir.
    // yeni bir sitringe dönüştürür.

let text = "Please visit Microsoft and Microsoft";
console.log(text);
console.log(text.replace('Microsoft' , 'Apple'));
    // ilk parametre 'Microsoft' değiştirmek istediğimiz değerin seçimi ,
    // ikinci parametre ise ne ile değiştirmek istediğimizdir.

console.log(fruits.replace('Çilek' , 'Armut'));
 
    // Tüm eşleşmeleri değiştirmek istiyorsanız, /g bayrak seti ile normal bir ifade kullanın.
console.log(text.replace(/Microsoft/g , 'Apple'));
console.log(text); // yeni bir sitringe dönüştürdüğü için baz string değerimizi değiştirmedi.

// concat() , iki veya daha fazla stringi birleştirir.

console.log(fruits.concat(', Kavun' , ', Ayva'));

// charAt() , bir stringte belirtilen bir dizindeki (konumdaki) karakteri döndürür.

console.log(fruits.charAt(1));
