import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import candidateReducer from "./reducer/candidate";

const reducer = combineReducers({
  candidate: candidateReducer,
});

export const store = configureStore({
  reducer: reducer,
});
