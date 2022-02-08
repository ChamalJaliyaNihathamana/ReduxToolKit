import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      state;
  }
}

// if (action.type === "ADD_BUG")
// return [
//   ...state,
//   {
//     id: ++lastId,
//     description: action.payload.description,
//     resolved: false,
//   },
// ];
// else if (action.type === "BUG_REMOVE")
// return state.filter((bug) => bug.id !== action.payload.id);

// return state;

// updating only the resolved property in immutable way
//    bug.id !== action.payload.id ? bug : { ...bug, resolved: true }