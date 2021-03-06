import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAssignToUser: (bugs, action) => {
      // destructuring the payload
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
    // actions => action hnadlers
    bugAdded: (bugs, action) => {
      // payload of the action is retrieved from action
      // action is received from dispatching
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});
export const { bugAdded, bugResolved, bugAssignToUser } = slice.actions;
export default slice.reducer;

// selector function
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolved);

// Memoization -> teachnique used to optimizing the high cost functions
//  f(x) => y cache input and output {input : 1 , output : 2}
// means if we pass 1 we'll get 2 next time we look in cache and bypass the cache
// logic

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
