import { all, fork } from "redux-saga/effects";
import sampleSagas from "./sampleSagas";

export default function* rootSaga() {
  yield all([fork(sampleSagas)]);
}
