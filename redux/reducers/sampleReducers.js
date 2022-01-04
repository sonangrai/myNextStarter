import { createAction, createReducer } from "@reduxjs/toolkit";

export const hello = createAction("HELLO");

const initialState = {
  open: false,
};

const sampleReducers = createReducer(initialState, {
  [hello]: (state) => {
    state.open = !state.open;
  },
});

export default sampleReducers;
