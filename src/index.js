import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  //   // Call an API
  //   //  When Promise resolved => dispatch () success
  dispatch({ type: "bugsRecieved", payload: { bugs: [1, 2, 3] } });
  //   // if the Promise rejected => dispatch() error
});

// Error notification

store.dispatch({ type: "error", payload: { message: "An Error Occured" } });
store.subscribe(() => {
  console.log("store changed");
});

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));

// working with normalize state
store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }));

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));

store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 1 }));

// we need to put this logic inside the bugs slice
const unresolved = getUnresolvedBugs(store.getState());
// const unresolved = store
//   .getState()
//   .entities.bugs.filter((bug) => !bug.resolved);
console.log(unresolved);

const bugsByUser = getBugsByUser(1)(store.getState());
console.log(bugsByUser);
