import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;

// store is obj consists of
    // dispatch -> used for dispatching actions
    // subscribe -> get notify everytime when state is changed (used by the UI layer)
    // getState -> getting the current state
    // replaceReducer
    // Symbol

// We don't have property to setting up the store *