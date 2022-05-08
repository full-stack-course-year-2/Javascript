// promise

// promiselerin yazilmasi

const loginOlduMu = true;

const promise_1 = () => {
  const result = new Promise((resolve, reject) => {
    if (loginOlduMu) {
      resolve("login basarili");
    } else {
      reject("login BASARISIZ");
    }
  });
  return result;
};

const makalesiVarMi = false;

const promise_2 = () => {
  const result = new Promise((resolve, reject) => {
    if (makalesiVarMi) {
      resolve("makaleler yüklendi");
    } else {
      reject("makalesi yok");
    }
  });
  return result;
};

// promislerin calistirilmasi
// senkron calistirilmasi
// siraya sokulmasi

promise_1()
  .then((sonuc) => {
    console.log(sonuc);
    promise_2()
      .then((makaleSonucu) => {
        console.log(makaleSonucu);
      })
      .catch((makaleHata) => {
        console.error(makaleHata);
      });
  })
  .catch((error) => {
    console.error(error);
  });
