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

fetch(url, {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  })
  .then((data) => {
    // console.log(data.slice(0, 10));
    data.map((todo) => todoList.push(todo));
    // todoList = data;
    todoList = todoList.slice(0, 10);
    console.log(todoList);
    console.log(data);
  });

// console.log(todoList);
