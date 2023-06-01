// let x;
// x = 1;
// console.log(x);
// alert(x);
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const x = "5";
// let y = 'dress';
// console.log(Number(x));
// console.log(typeof Number(x));
// console.log(Number(y));
// console.log(typeof Number(y));

// console.log(Number.parseInt('5px'));
// console.log(Number.parseInt('12qwe74'));
// console.log(Number.parseInt('12.46qwe79'));
// console.log(Number.parseInt('qweqwe'));

// console.log(Number.parseFloat('5px'));
// console.log(Number.parseFloat('12qwe79'));
// console.log(Number.parseFloat('12.46qwe79'));
// console.log(Number.parse

// console.log(Number.isNaN(x));
// z = Number(y);
// console.log(Number.isNaN(z));

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.indexOf('c'));
// console.log(message.indexOf('[['));
// console.log(message.includes('x'));
// console.log(message.includes('c'));
// console.log(message.endsWith('c'));
// console.log(message.endsWith('s!'));
// const x = message.replace('c', '!!!');
// const y = message.replaceAll('a', '!!!');
// console.log(x);
// console.log(y);
// console.log(message.slice(4, message.length - 1));
// const operator = message.length < 333 ? 'small' : 'big';
// console.log(operator);
// let client = 18;
// const max = 25;
// do {client += 1;
//     console.log(client);}
// while (client < max);

// console.log('client');
// for (let i = client; i < max; i += 1) {
//     client += 1;
//     console.log(client);

//     if (client === 20) {break};
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = 'Client is OFF';;
// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Client is OK';
//         break;
//     }
// }
// console.log(message);

// const name = "Mango";
// let x = name.split('')
// console.log(x);
// console.log(x.join(''));
// console.log(x.indexOf('n'));
// console.log(x.includes('n'));
// console.log(x.includes('x'));

// function bar() {
//     console.log("bar");
//   }
  
//   function baz() {
//     console.log("baz");
//   }
  
//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }
  
//   foo();

// const name = "Генрі Сибола";

// const book = {
//     name,
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
  
//   console.log(book);

// const book = {
//     books: ['1'],
//     getBooks(){
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     },

//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//       },

// }

// console.log(book.getBooks());
// book.addBook('2');
// book.addBook('3')
// console.log(book.getBooks());
// book.removeBook('2');
// console.log(book.getBooks());

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   console.log(book.hasOwnProperty('title'));
//   console.log(Object.keys(book));

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
//   ];

// const temps = [14, -4, 25, 8, 11];

// console.log(temps);
// console.log(Math.max(temps));
// console.log(...temps);
// console.log(Math.max(...temps));

// const y = [...temps];
// console.log(y);

// const x = [...temps, ...y];

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = {...second, ...first };
// console.log(third);

function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);