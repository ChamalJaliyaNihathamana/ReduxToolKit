import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

export default function () {
  // root reducer is used here
  // we can add middleware function as appending args
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      logger,
      toast,
    ],
  });
}

// store is obj consists of
// dispatch -> used for dispatching actions
// subscribe -> get notify everytime when state is changed (used by the UI layer)
// getState -> getting the current state
// replaceReducer
// Symbol

// We don't have property to setting up the store *
