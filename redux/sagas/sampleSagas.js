import { all, put, takeLatest } from "redux-saga/effects";
import { hello } from "../reducers/sampleReducers";

/**
 * Menu toggler
 */
function* theHello(action) {
  try {
    yield put(hello);
  } catch (error) {}
}

export default function* sampleSagas() {
  yield all([takeLatest(hello, theHello)]);
}
