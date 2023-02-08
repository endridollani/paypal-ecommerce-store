import { combineReducers } from 'redux';
import { authReducer } from '../authUser/reducer';
import { CardsReducer } from '../card/reducer';
import { ProductsReducer } from '../products/reducer';
import { UsersReducer } from '../users/reducer';

const rootReducer = combineReducers({
  authUser: authReducer,
  products: ProductsReducer,
  users: UsersReducer,
  cards: CardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
