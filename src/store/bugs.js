import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions ( Action Creators )
export const bugAdded = createAction("BUG_ADD");
export const bugRemoved = createAction("BUG_REMOVE");
export const bugResolved = createAction("BUG_RESOLVE");

//   Reducer ( should be the default export)

let lastId = 0;

// has two paras i) initial state ii) object that maps actions to function that handles actions
export default createReducer([], {
  // key : value  -> key = actions value = functions
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },

  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
});
