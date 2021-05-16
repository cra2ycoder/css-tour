import { configureStore } from "@reduxjs/toolkit";

/**
 * @description
 * importing the reducers to pass it to redux store
 * to use it every where in App
 */
import liveCoderReducer from "./livecoder/slice";

/**
 * @description
 * redux ONE STORE to pass it via APP
 */
export default configureStore({
  reducer: {
    liveCoderReducer
  }
});
