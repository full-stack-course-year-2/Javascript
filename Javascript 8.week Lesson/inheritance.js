////

class Tasit {
  constructor(marka, model, yil) {
    this.marka = marka;
    this.modeli = model;
    this.yil = yil;
  }
  calistir = function () {
    console.log("calisti");
  };
  bilgi = function () {
    console.log(`Bu tasit bir ${this.marka} dir`);
  };
}

class Motosiklet extends Tasit {
  constructor(marka, model, yil, km) {
    super(marka, model, yil);
    this.km = km;
  }
}

const tasit_1 = new Tasit("audi", "a4", 2015);
const tasit_2 = new Motosiklet("honda", "200", 2015, 150000);
