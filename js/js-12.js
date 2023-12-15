// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//   let number = from;
//   const interval = setInterval(function () {
//     console.log(number);
//     if (interval === to) {
//       clearInterval(interval);
//     }
//     number++;
//   }, 1000);
// }
// printNumbers(0, 20);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього.then:

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms));
// }
// const time = 1000;
// delay(time).then(() => alert(`виконалось через ${time} секунди`));

// Або так

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }
// delay(3000).then(() => alert("виконалось через 3 секунди"));
