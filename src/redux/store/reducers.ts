import { combineReducers } from 'redux';
import { authReducer } from '../authUser/reducer';
import { ProductsReducer } from '../products/reducer';

const rootReducer = combineReducers({
  authUser: authReducer,
  products: ProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
