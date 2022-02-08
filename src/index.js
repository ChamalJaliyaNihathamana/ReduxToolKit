import configureStore from "./store/configureStore";
import * as actions from "./store/bugs/actions";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed");
});
store.dispatch(actions.bugAdded("Bug1"));
store.dispatch(actions.bugAdded("Bug2"));
store.dispatch(actions.bugAdded("Bug3"));
store.dispatch(actions.bugResolved(1));
store.dispatch(actions.bugRemoved(1));
