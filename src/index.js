import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

// calls when ever state changes
const unsubscribe = store.subscribe(() => {
  // place where we refresh the view
  console.log("Store Changed !", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugResolved(1));

// we don't get notify about current state
// unsubscribe();

store.dispatch(bugRemoved(1));
