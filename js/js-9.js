// HTML

//         <!-- 1 -->
//     <!-- <div id="text" class="text">
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ab vel
//       minima impedit cupiditate vero nihil eaque molestias labore omnis iste
//       maxime id. Alias, nisi? Sint similique eveniet iusto modi!
//     </div>
//     <button id="btn" class="btn">Сховати текст</button> -->
//     <!-- 2 -->
//     <!-- <button class="btn">Click</button> -->
//     <!-- 3 -->
//     <!-- <ul class="tree">
//       Tree
//       <li id="textHidden1 ">1</li>
//       <li id="textHidden2 ">2</li>
//       <li id="textHidden3 ">3</li>
//       <li id="textHidden4 ">4</li>
//     </ul> -->



// №1

// // Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// // <div id="text"> зникав.
// const btn = document.getElementById("btn");
// const text = document.getElementById("text");
// btn.addEventListener("click", function () {
//   text.style.display = "none";
// });


// №2

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   btn.style.display = "none";
// });

// або
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   btn.style.display = "none";
// });


// №3
// HTML

//     <!-- 3 -->
//     <div class="exrc3">
//       <ul id="tree">
//         <li>
//           AAA
//           <ul>
//             <li>
//               BBB
//               <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//                 <li>4</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>


// JS

// // Створіть дерево, яке показує/приховує дочірні вузли при кліці
// // -- Відповідь -- //
// for (let li of tree.querySelectorAll("li")) {
//   let span = document.createElement("span");
//   li.prepend(span);
//   span.append(span.nextSibling);
// }
// tree.onclick = function (event) {
//   if (event.target.tagName != "SPAN") {
//     return;
//   }
//   let childrenContainer = event.target.parentNode.querySelector("ul");
//   if (!childrenContainer) return;
//   childrenContainer.hidden = !childrenContainer.hidden;
// };


// АБО ТАКИЙ ВАРІАНТ
// HTML

// <section style="padding: 20px; border-bottom: 2px dashed">
//       <h2>Третє завдання</h2>
//       <ul id="tree">
//         <li style="margin-bottom: 20px;">
//           Батьківський елемент 1
//           <ul>
//             <li>Дочірній елемент 1-1</li>
//             <li>Дочірній елемент 1-2</li>
//           </ul>
//         </li>
//         <li style="margin-bottom: 20px;">
//           Батьківський елемент 2
//           <ul>
//             <li>Дочірній елемент 2-1</li>
//             <li>Дочірній елемент 2-2</li>
//           </ul>
//         </li>
//         <li style="margin-bottom: 20px;">
//           Батьківський елемент 3
//           <ul>
//             <li>Дочірній елемент 3-1</li>
//             <li>Дочірній елемент 3-2</li>
//           </ul>
//         </li>
//         <li style="margin-bottom: 20px;">
//           Батьківський елемент 4
//           <ul>
//             <li>Дочірній елемент 4-1</li>
//             <li>Дочірній елемент 4-2</li>
//           </ul>
//         </li>
//         <li style="margin-bottom: 20px;">
//           Батьківський елемент 5
//           <ul>
//             <li>Дочірній елемент 5-1</li>
//             <li>Дочірній елемент 5-2</li>
//           </ul>
//         </li>
//       </ul>
//     </section>

// JS

// document.addEventListener("DOMContentLoaded", function () {
//     const nodes = document.querySelectorAll("li");
  
//     nodes.forEach(function (node) {
//       node.addEventListener("click", function (event) {
//         event.preventDefault();
//         const childUL = this.querySelector("ul");
//         if (childUL) {
//           childUL.style.display = childUL.style.display === "none" ? "block" : "none";
//         }
//       });
//     });
//   });

