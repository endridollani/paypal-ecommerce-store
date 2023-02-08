import { Dispatch } from 'redux';
import { CardType } from '../../types/Card';
import { Cards } from './types';

export const resetCards = (cards: CardType[]) => (dispatch: Dispatch) => {
  dispatch({
    type: Cards.RESET_CARDS_STATE,
    payload: cards,
  });
};

export const appendCard = (card: CardType) => (dispatch: Dispatch) => {
  dispatch({
    type: Cards.UPDATE_CARDS_STATE,
    payload: card,
  });
};

export const clearCards = () => (dispatch: Dispatch) => {
  dispatch({
    type: Cards.CLEAR_CARDS_STATE,
  });
};
