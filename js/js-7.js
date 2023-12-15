// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

// --Відповідь-- //
function Calculator() {
  // 1 //
  this.read = function () {
    this.n1 = prompt("Введіть перше число");
    this.n2 = prompt("Введіть друге число");
  };
  // 2 //
  this.sum = function () {
    return Number(this.n1) + Number(this.n2);
  };
  // 3 //
  this.mul = function () {
    return Number(this.n1) * Number(this.n2);
  };
}

let calculator = new Calculator();
calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());
