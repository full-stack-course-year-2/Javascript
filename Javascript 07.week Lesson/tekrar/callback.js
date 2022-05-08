const ikinci = (next) => {
  setTimeout(() => {
    console.log("ikinci");
    // .....
    next();
  }, 0);
};

const ucuncu = () => {
  const mesaj = () => console.log("ucuncu");

  setTimeout(mesaj, 1000);
};

ikinci(ucuncu);
