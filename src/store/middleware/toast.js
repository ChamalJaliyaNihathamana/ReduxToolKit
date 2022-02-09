const toast = (store) => (next) => (action) => {
  if (action.type === "error")
    // we can use toast lib here
    console.log("Toastify", action.payload.message);
  else next(action);
};

export default toast;
