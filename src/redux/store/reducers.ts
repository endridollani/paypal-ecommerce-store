import { combineReducers } from 'redux';
import { authReducer } from '../authUser/reducer';

const rootReducer = combineReducers({
  authUser: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
