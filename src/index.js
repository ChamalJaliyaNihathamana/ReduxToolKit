// immutability
const person = {
  name: "John",
  address: {
    country: "United States",
    city: "Washington",
  },
};

// copy the content of person to empty object
//  third arg is optional (object with updated properties)
const updated = Object.assign({}, person, { name: "Bob", age: "22" });
// debugger;

// solution to below problem
const solupdated = {
  ...person,
  address: { ...person.address, city: "New York" },
  name: "Bob",
};
// debugger;
// method 2 (but both this two method perform a shallow copy)
const supdated = { ...person, name: "Bob" };
supdated.address.city = "New York"; // this violate the immutability
// meaning now city in the person changed to New York. at this point and after
// debugger;

// immutability with arrays
const numbers = [1, 2, 3];

//Adding in place of 2
const index = numbers.indexOf(2);
// up to 2 excluding 2
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
debugger;

// Remove 2
const removed = numbers.filter((n) => n !== 2);
debugger;

// Updating (replace 2 with 20)
const updatedArr = numbers.map((n) => (n === 2 ? 20 : n));
debugger;
