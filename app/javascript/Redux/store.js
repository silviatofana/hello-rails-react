import { configureStore } from "@reduxjs/toolkit";
import greetingReducer, { fetchGreeting } from "../reducer/reducer";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

store.dispatch(fetchGreeting());

export default store;