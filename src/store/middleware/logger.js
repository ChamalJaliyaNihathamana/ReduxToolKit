// with currying
const logger = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("next", next);
  console.log("action", action);
  next(action)
};

export default logger;
// const logger = (store ,next ,action) =>{}

// action that was dispatched
//  next is ref to next middleware function (if it's last next will be the reducer)
