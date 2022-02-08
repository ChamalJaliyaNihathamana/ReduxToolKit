//  ActionTypes
const BUG_ADDED = "BUG_ADD";
const BUG_REMOVED = "BUG_REMOVE";
const BUG_RESOLVED = "BUG_RESOLVE";

// Actions ( Action Creators )
export const bugAdded = (description) => ({
    type: BUG_ADDED,
    payload: {
      description
    },
  });
  
  export const bugRemoved = (id) => ({
    type: BUG_REMOVED,
    payload: {
      id
    },
  });
  
  export const bugResolved = (id) => ({
    type: BUG_RESOLVED,
    payload: {
      // id: id, -> short hand syntax
      id
    },
  });

//   Reducer ( should be the default export)

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      state;
  }
}