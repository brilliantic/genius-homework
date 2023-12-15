// №1

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let arr = [];
// for (let i = 0; i < fruts.length; i++) {
//     let word = fruts[i].name;
//     arr.push(word);
// }
// console.log(arr);


// №2

// for (let a = 2; a < 10; a += 2) {
//   console.log(a);
// }

// або 
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// №3

//  -- 3 --
// Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
// let i = 0;
// while (i<5) {
//     console.log(`цифра ${i}!`);
//     i++;
// }


// №4

// while (true) {
//   let value = +prompt("Введіть число більше 100!");
//   if (!value) break;
//   else if (value > 100) {
//     alert("Молодець! Ти ввів(ввела) більше 100! Твоє число = " + value);
//     break;
//   }
// }

// або

// let d = 0;
// while (d < 100) {
//   let d = prompt("Введіть число більше 100");
//   if (d > 100 || d === null || d == "") break;
// }


// №5
// const girls = [
//   { age: 10, name: "Оля" },
//   { age: 20, name: "Аня" },
//   { age: 30, name: "Юля" },
//   { age: 40, name: "Катя" },
// ];
// let value = 0;
// let i = 0;
// for (i = 0; i < girls.length; i++) {
//   value += girls[i].age;
// }
// console.log(`Середній вік ${value / i} років`);

