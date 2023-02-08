import { Reducer } from 'react';
import { Action } from 'redux';
import { Cards, CardsState } from './types';

const initialState: CardsState = {
  data: [],
};
const CardsReducer: Reducer<CardsState, Action> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case Cards.UPDATE_CARDS_STATE:
      state = { ...state, data: [...state.data, action.payload] };
      break;
    case Cards.RESET_CARDS_STATE:
      state = { data: action.payload };
      break;
    case Cards.CLEAR_CARDS_STATE:
      state = initialState;
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export { CardsReducer };
