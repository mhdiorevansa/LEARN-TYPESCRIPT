"use strict";
// di typecript, pembuatan variabel sebaiknya diikuti dengan tipe datanya
let namaSaya = "muhammad dio revansa";
let nomor = 123;
let isDead = false;
// penerapan variabel dengan multi tipedata
let pacarSaya;
pacarSaya = 12 + " wak" + true;
// array biasa
let makananFav;
makananFav = ["nasgor", "migor"];
// tupple array
let aboutMe;
aboutMe = ["jus mangga", true, 3, 4];
let temanKita;
temanKita = {
    nama: "abdel",
    umur: 23,
};
// function
function create() {
    return 2;
}
// arrow function
const create2 = () => {
    return "hello";
};
// jika ada parameter didalam sebuah fungsi, jangan lupa tambahkan tipe datanya
const add = (a, b) => {
    return `${a} ditambah ${b} = ${a + b}`;
};
let dio;
dio = "aku jawa";
const createIntel = (processor) => {
    console.log(`
      -----
      terimakasih prosesor ${processor.brand}
      -----
      anda telah berhasil membuat prosesor dengan detail berikut : 
      nama base model : ${processor.baseModel}, 
      nama model : ${processor.modelName}, 
      ukuran clock : ${processor.clockSpeed} GHz,
      Turbo Boost enable : ${processor.turboBoost},
      core total : ${processor.coreTotal},
      -----
      `);
};
const createAMD = (processor) => {
    console.log(`
      -----
      terimakasih prosesor ${processor.brand}
      -----
      anda telah berhasil membuat prosesor dengan detail berikut : 
      nama base model : ${processor.baseModel}, 
      nama model : ${processor.modelName}, 
      ukuran clock : ${processor.clockSpeed} GHz,
      Precision Boost enable : ${processor.precisionBoost ? processor.precisionBoost : "ga ada wak"},
      core total : ${processor.coreTotal},
      -----
      `);
};
let intelCoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-10210u",
    clockSpeed: 3.0,
    turboBoost: true,
    coreTotal: 4,
};
let AmdRyzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "ryzen 3 1200",
    clockSpeed: 5.0,
    coreTotal: "octa core",
};
createIntel(intelCoreI5);
createAMD(AmdRyzen3);
// console.log({ namaSaya });
// console.log({ nomor });
// console.log({ isDead });
// console.log({ pacarSaya });
// console.log({ makananFav });
// console.log({ aboutMe });
// console.log({ temanKita });
// console.log(create());
// console.log(create2());
// console.log(add(2, 3));
// console.log({ dio });
