import { useSelector } from 'react-redux';

export default function useCards() {
  const { data } = useSelector((state: any) => state.cards);

  return {
    cards: data ?? [],
  };
}
