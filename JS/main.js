// let matn = "salom";         //string
// let raqam = 12345;          //number
// let soz;                    //undefined
// document .write(soz);

// let rost = true;               //true & false
// document.write(rost);          //boolean
// let rost = 45 == 44 ? true : false;
// document.write(rost);

// let arrayObject = [45,78,"salom","matn",true,false,"true","false","olma","1234",]
// console.log(arrayObject[8])

// let oddiyObject = {ism: "Abdurauf" , yoshi: 14, mahallasi: "Iqbol mahallasi"};      //key,value
// console.log(oddiyObject.ism, oddiyObject.yoshi)

// function savatchaniTekshir(uzatilganContainer = [45,"false",false]){
//     if(container.length == 0){
//         document.write("savatchaning ichida " + container.length + " ta malumot bor");
//     }
//     else{
//         document.write("savatchaning ichida " + container.length + " ta malumot bor");
//     }
// }
// let container = [12,"matn",78,true,"js"]
// savatchaniTekshir(container);


let sana = new Date();

sana.setFullYear(2010);
sana.setMonth(3);
sana.setDate(2)

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"]
let haftaKunlari = ["yakshamba","dushanba","seshanba","chorshanba","payshanba","juma","shamba"]

document.write("Bugun "+ yil +"-yil "+ oylar[oy] +" oyning "+ kun +" -kuni.Haftaning " + haftaKunlari[haftaKuni] +" kuni.")
