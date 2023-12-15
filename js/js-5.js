// №1

// const studentTemplate = {
//     name: "",
//     major: "",
//     averageGrade: 0,
//     absences: 0
// };
// // Варіанти студентів у масиві
// const students = [
//     {
//         ...studentTemplate,
//         name: "Іван",
//         major: "Інформатика",
//         averageGrade: 4.5,
//         absences: 2
//     },
//     {
//         ...studentTemplate,
//         name: "Марія",
//         major: "Психологія",
//         averageGrade: 4.0,
//         absences: 5
//     },
//     {
//         ...studentTemplate,
//         name: "Олександр",
//         major: "Економіка",
//         averageGrade: 3.8,
//         absences: 8
//     }
// ];


// // Додавання іншого студента до масиву
// students.push({
//     ...studentTemplate,
//     name: "Анна",
//     major: "Медицина",
//     averageGrade: 4.9,
//     absences: 1
// });

// // Виведення інформації про всіх студентів
// for (const student of students) {
//     console.log("-----");
//     console.log(`Ім'я: ${student.name}`);
//     console.log(`Спеціальність: ${student.major}`);
//     console.log(`Середній бал: ${student.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${student.absences}`);
// }


// №2

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Button Example</title>
// </head>
//     <div>
//       <button id="html">HTML</button>
//       <button id="css">CSS</button>
//     </div>
// <body>
//     <button id="htmlButton">HTML</button>
//     <button id="cssButton">CSS</button>
//     <p id="output"></p>

//     <script>
// function html() {
//   console.log("HTML- це мова розмітки за допомогою тегів");
// }

// function css() {
//   console.log(
//     "CSS-спеціальна мова, що використовується для запису оформлення сторінок, написаних мовами розмітки даних."
//   );
// }

// document.querySelector("#html").addEventListener("click", html);
// document.querySelector("#css").addEventListener("click", css);
//     </script>
// </body>
// </html>

// або

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Button Example</title>
// </head>
// <body>
//     <div id="buttons"></div>
//     <p id="output"></p>

//     <script>
//         // Отримання посилання на контейнер для кнопок та елемент виводу
//         const buttonsContainer = document.getElementById("buttons");
//         const outputElement = document.getElementById("output");

//         // Створення кнопок та додавання їх до контейнера
//         const createButton = (text, onClick) => {
//             const button = document.createElement("button");
//             button.textContent = text;
//             button.addEventListener("click", onClick);
//             buttonsContainer.appendChild(button);
//         };

//         // Функції для виводу визначень
//         const displayHtmlDefinition = () => {
//             outputElement.textContent = "HTML - HyperText Markup Language - це мова розмітки, яка використовується для створення веб-сторінок.";
//         };

//         const displayCssDefinition = () => {
//             outputElement.textContent = "CSS - Cascading Style Sheets - це мова стилів, яка використовується для оформлення веб-сторінок.";
//         };

//         // Створення кнопок з відповідними функціями
//         createButton("HTML", displayHtmlDefinition);
//         createButton("CSS", displayCssDefinition);
//     </script>
// </body>
// </html>


// №3

// function calculateTotalCost(productName, pricePerKg, quantity) {
//     const totalCost = (pricePerKg * quantity).toFixed(2);
//     return `Назва товару: ${productName}, Вартість: ${totalCost}`;
// }
// // Варіанти тестування функції
// const bananaCost = calculateTotalCost("banana", 30, 4.5);
// console.log(bananaCost);
// const cherryCost = calculateTotalCost("cherry", 58, 1.3);
// console.log(cherryCost);
// const orangeCost = calculateTotalCost("orange", 89, 3.4);
// console.log(orangeCost);

