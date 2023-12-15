// Створити телефонну книгy
//  1) створити початковий клас Abonent, де зберігатимуться ім*я і номер
//  2) створити set який прийматиме телефон і номер
//  3) створити get який виводитиме данні про абонента
//  4) створити три різних юзери
//  5) вивести данні

// --Відповідь-- //
class Abonent {
  constructor(abonent) {
    this.name = abonent.name;
    this.number = abonent.number;
  }

  set name(newName) {
    this.Name = newName;
  }

  set number(newNumber) {
    this.Number = newNumber;
  }

  get name() {
    return `Abonent name: ${this.Name}; Abonent Number: ${this.Number};`;
  }
}

const user1 = new Abonent({
  name: "Анастасія",
  number: "380638844111",
});

const user2 = new Abonent({
  name: "Богдан",
  number: "390966969145",
});

const user3 = new Abonent({
  name: "Валерія",
  number: "380504200777",
});

console.log(user1, user2, user3);
