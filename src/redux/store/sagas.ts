import { all, fork } from 'redux-saga/effects';
import AuthSaga from '../authUser/sagas';

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
