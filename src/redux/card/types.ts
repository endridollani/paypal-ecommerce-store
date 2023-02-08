import { CardType } from '../../types/Card';

export enum Cards {
  RESET_CARDS_STATE = 'RESET_CARDS_STATE',
  UPDATE_CARDS_STATE = 'UPDATE_CARDS_STATE',
  CLEAR_CARDS_STATE = 'CLEAR_CARDS_STATE',
}
export interface CardsState {
  data: Array<CardType>;
}
