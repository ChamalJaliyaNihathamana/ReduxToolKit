import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);
debugger;

// Using Immutable

// import { Map } from "immutable";

// let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   return book.set("isPublished", true);
// }

// publish(book);
// debugger;
