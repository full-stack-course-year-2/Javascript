console.log('functions');


// fxy (x+y)

// bir sonuc döndürmeyen function
function islem() {
    var kullaniciAdi = 'Özlem';

    console.log(kullaniciAdi);
}

// islem();

// bir sonuc döndüren function
function topla(sayi_1, sayi_2) {
    var result = sayi_1 + sayi_2;
    return result;
}

function cikar(sayi_1, sayi_2) {
    var result = sayi_1 - sayi_2;
    return result;
}


var sonuc = topla(1, 2);
var cikarmaIslemiSonucu = cikar(7, 2);

console.log(sonuc);
console.log(cikarmaIslemiSonucu);


function user(userName, password) {
    // ...
    // ...
    // ...
    // ...
    // ...

    var result = 'Kullanici adi: ' + userName + ', sifre: ' + password;
    return result;
}

console.log(user('Murat', '123'));



function login(userName) {
    var result;
    if (userName == 'Murat') {
        result = 'Login basarili'
    } else {
        result = 'Login basarisiz'
    }
    return result;
}

console.log(login('Murat__===))'));



function userLogin(userName, password) {
    var result = {
        kullaniciAdi: userName,
        sifresi: password
    }
    return result;
}


console.log(userLogin('Osman', '456'))


function kullaniciLoginOlduMu() {
    var sonuc = false
    return sonuc;
}

// camel-case
console.log(kullaniciLoginOlduMu());

// kebap-case
// kullanici-login-oldu-mu