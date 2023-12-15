// №1

// let num1 = 1;
// let num2 = 0;
// let num3 = -3;
// console.log(num1 > 0);
// console.log(num2 > 0);
// console.log(num3 > 0);

// або 

// const num = 1;
// console.log(num > 0 ? true : false);

// №2
// повинно перевіряти вміст змінної. Якщо "test" = вивести true, в інших випадках вивести false
// змінну variable треба змінювати на 'test', "qwerty", true. Коли змінна === test - у консолі буде true. Але коли змінна буде true у консолі буде false.


// let test = 'test';
// let qwerty = 'qwerty';
// let variableTrue = true;
// console.log(test === 'test');
// console.log(qwerty === 'test');
// console.log(variableTrue === 'test');

// №3
// (a >= 10) ? console.log(a - 5) : console.log(a + 5);

// №4
// const months = {
//   1: "Jan",
//   2: "Feb",
//   3: "Mar",
//   4: "Apr",
//   5: "May",
//   6: "Jun",
//   7: "Jul",
//   8: "Aug",
//   9: "Sep",
//   10: "Oct",
//   11: "Nov",
//   12: "Dec"
// };

// let num = prompt("Type month 1-12");
// num = Number(num);

// if (num >= 1 && num <= 12) {
//   console.log(months[num]);
// } else {
//   console.log("You are trying to type a value which does not exist");
// }


// №5
// Розберіть таке рішення

// let num = parseInt(prompt('Введіть трьохзначне число'));
// if (num >= 100) {
//     let a = Math.floor(num / 100);
//     let b = Math.floor((num % 100) / 10);
//     let c = Math.floor(num % 10);
//     let sum = a + b + c;
//     alert('Сума цифр числа ' + num + ' дорівнює = ' + sum);
// } else {
//     alert('Це не трьохзначне число');
// }

// Або такий варіант з циклами

// let num = parseInt(prompt('Введіть трьохзначне число'));
// if (num > 99 && num < 1000) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     alert(`Сума дорівнює = ${sum}`);
// } else {
//     alert('Це не трьохзначне число');
// }

