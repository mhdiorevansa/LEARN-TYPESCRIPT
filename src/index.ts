// di typecript, pembuatan variabel sebaiknya diikuti dengan tipe datanya
let namaSaya: string = "muhammad dio revansa";
let nomor: number = 123;
let isDead: boolean = false;

// penerapan variabel dengan multi tipedata
let pacarSaya: number | string | boolean;
pacarSaya = 12 + " wak" + true;

// array biasa
let makananFav: string[];
makananFav = ["nasgor", "migor"];

// tupple array
let aboutMe: [string, boolean, number, number];
aboutMe = ["jus mangga", true, 3, 4];

// tipe data custom
type TemanType = {
	nama: string;
	umur: number;
	// dengan menambahkan ? di sebelah atributt, dia akan jadi optional
	isPunyaHutang?: boolean;
};
let temanKita: TemanType;
temanKita = {
	nama: "abdel",
	umur: 23,
};

// function
function create(): number {
	return 2;
}

// arrow function
const create2 = (): string => {
	return "hello";
};

// jika ada parameter didalam sebuah fungsi, jangan lupa tambahkan tipe datanya
const add = (a: number, b: number): string => {
	return `${a} ditambah ${b} = ${a + b}`;
};

// dengan custom tipe data, kita bisa langsung menentukan tanpa membuat objek. tergantung kebutuhan aja
type Pria = string;
let dio: Pria;
dio = "aku jawa";

// interface ini sebaiknya dibuat untuk menentukan tipe data parameter pada sebuah function. dan interface bisa diduplikat sehingga menambahkan atribut baru
type CoreCount = 2 | 4 | 6 | 8;
type CoreName = "dual core" | "quad core" | "octa core";
type Core = CoreCount | CoreName;

interface IProcessor {
	brand: string;
	baseModel: string;
	modelName: string;
	clockSpeed: number;
	coreTotal: Core;
}

// dengan interface kita bisa melakukan pewarisan
interface Intel extends IProcessor {
	turboBoost: boolean;
}
interface Pentium extends Intel {
	// kita bisa membuat extends lagi dari interface extends
}

interface AMD extends IProcessor {
	precisionBoost?: boolean;
}

const createIntel = (processor: Intel) => {
	console.log(
		`
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
      `
	);
};

const createAMD = (processor: AMD) => {
	console.log(
		`
      -----
      terimakasih prosesor ${processor.brand}
      -----
      anda telah berhasil membuat prosesor dengan detail berikut : 
      nama base model : ${processor.baseModel}, 
      nama model : ${processor.modelName}, 
      ukuran clock : ${processor.clockSpeed} GHz,
      Precision Boost enable : ${
				processor.precisionBoost ? processor.precisionBoost : "ga ada wak"
			},
      core total : ${processor.coreTotal},
      -----
      `
	);
};

let intelCoreI5: Intel = {
	brand: "intel",
	baseModel: "core i5",
	modelName: "i5-10210u",
	clockSpeed: 3.0,
	turboBoost: true,
	coreTotal: 4,
};
let AmdRyzen3: AMD = {
	brand: "AMD",
	baseModel: "ryzen 3",
	modelName: "ryzen 3 1200",
	clockSpeed: 5.0,
	precisionBoost: true,
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
