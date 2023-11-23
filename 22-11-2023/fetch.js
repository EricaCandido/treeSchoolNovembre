// //mock
// import products from "./mock.json" assert { type: "json" };
// //  console.log(products);
// // console.log(products.productsList);
// //  console.log(products.productsList.length);
// // console.log(products.productsList[1]);
// // console.log(products.productsList.filter((prod) => prod.id < 6));

// // products.productsList.map((prod) => {
// //   if (prod.id < 6) {
// //     console.log(prod);
// //   }
// // });

// // const shortList = products.productsList.filter((prod) => prod.id < 6);
// // console.log(shortList);
// // shortList.map((prod) => console.log(prod));

// //Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
// console.log(products.productsList);

// //Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista
// // dei prodotti, cioé le cuffie...
// console.log(products.productsList[2]);
// //Esercizio 3 dato il mock di partenza, stampa in console la lista dei prodotti che costano
// //  meno di 200 euro
// console.log(products.productsList.filter((prod) => prod.price < 200));

// //Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8,
// // (ATTENZIONE:come oggetto non come lista)

// console.log(products.productsList.filter((prod) => prod.id == 8)[0]);

// products.productsList.map((prod) => {
//   if (prod.id == 8) {
//     console.log(prod);
//   }
// });

// products.productsList.forEach(function (element) {
//   if (element.id === 8) {
//     console.log(element);
//   }
// });
// //Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock

// products.productsList.map((prod) => console.log(prod.name));

// let productsNames = [];

// products.productsList.map((prod) => productsNames.push(prod.name));
// console.log(productsNames);

const url = "https://jsonplaceholder.typicode.com/todos";

let todoList = [];
//GET
// fetch(url, {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data.slice(0, 10));
//     data.map((todo) => todoList.push(todo));
//     // todoList = data;
//     todoList = todoList.slice(0, 10);
//     // console.log(todoList);
//     // console.log(data);
//   });

// console.log(todoList);
//POST
// const postData = {
//   userId: 6,
//   title: "Fare la spesa",
//   completed: false,
// };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(postData),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Risposta della richiesta POST:", data);
//   })
//   .catch((error) => {
//     console.log("Errore durante la richiesta POST:", error);
//   });

//PUT
// const putData = {
//   userId: 6,
//   title: "Andare a fare shopping",
//   completed: true,
// };
// fetch("https://jsonplaceholder.typicode.com/todos/16", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(putData),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Risposta della richiesta PUT ", data);
//   })
//   .catch((error) => console.log("Errore durante la richiesta PUT: ", error));

//DELETE
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "DELETE",
// })
//   .then((req) => {
//     if (!req.ok) {
//       throw new Error("Errore durante la richiesta DELETE ", req.statusText);
//     }
//     console.log("Elemento eliminato con successo");
//   })
//   .catch((error) => console.log("Errore: ", error));
