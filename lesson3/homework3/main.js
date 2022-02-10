// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [1, 2, 3, 4, 5];
// let string = ['Vasya', 'School', 'Jopa', 'Dota2', '50'];
// let full = ['Vasya', 50, 'year', 'gender', true];
// console.log(number, string, full);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 50;
// arr[1] = true;
// arr[2] = 'Kolya';
// console.log(arr)


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++){
//     document.write(`<div>Vasya</div>`);
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++){
//     document.write(`<div>item ${i}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let arr = 0;
// while (arr < 20) {
//     document.write(`<h1>довільний текст</h1>`)
//     arr++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let arr = 0;
// while (arr < 20) {
//     document.write(`<h1>Text ${arr}</h1>`)
//     arr++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write('<ul>');
// for (let item of items) {
//     document.write(`<li>${item}</li>`)
//     console.log(`${item}`)
// }
// document.write('</ul>');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let itemStrings = ['hello', 'I', 'like', 'video', 'games', 'and', 'do', 'not', 'liked', 'learns'];
// for (i = 0; i < itemStrings.length; i++) {
//     document.write(`<div>${itemStrings[i]}</div>`);
//     console.log(`${itemStrings}`);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let itemFulls = ['Hi', 'my', 'name', 'is', true, 'i', 'am', 20, false, 'years'];
// document.write('<ul>');
// for (let itemFull of itemFulls) {
//     document.write(`<li>${itemFull}</li>`);
//     console.log(`${itemFull}`);
// }
// document.write('</ul>')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let items = ['hi', true, 90, {}, false, 70, 'Vasya', [], 60, 'ten'];
// document.write('<ol>');
// for (let item of items) {
//     if (typeof item === 'boolean'){
//         document.write(`<li>${item}</li>`);
//     }
// }
// document.write('<ol>')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let items = ['hi', true, 90, {}, false, 70, 'Vasya', [], 60, 'ten'];
// document.write('<ol>');
// for (let item of items) {
//     if (typeof item === 'number'){
//         document.write(`<li>${item}</li>`);
//     }
// }
// document.write('<ol>')

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let items = ['hi', true, 90, {}, false, 70, 'Vasya', [], 60, 'ten'];
// document.write('<ol>');
// for (let item of items) {
//     if (typeof item === 'string'){
//         document.write(`<li>${item}</li>`);
//     }
// }
// document.write('<ol>')


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr [0] = 'hi';
// arr [1] = 'kolya';
// arr [2] = 22;
// arr [3] = 'you';
// arr [4] = {};
// arr [5] = [];
// arr [6] = 'status';
// arr [7] = true;
// arr [8] = 47;
// arr [9] = false;
//
// document.write(`<ol>`);
// for (let arrElement of arr) {
//     document.write(`<li>${arrElement}</li>`);
//     console.log(`${arrElement}`);
// }
// document.write(`</ol>`);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(+ 1 +' ');
//     document.write(+ i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(+ 1 +' ');
//     document.write(+ i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(+ 1 +' ');
//     document.write(+ i + ' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(+1 + ' ');
//         document.write(+i + ' ');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(+1 + ' ');
//         document.write(+i + ' ');
//     }
// }