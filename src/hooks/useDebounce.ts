import { useEffect, useState } from 'react';

export function useDebounce(searchText: string, delay = 500) {
  const [debouncedTerm, setVal] = useState('');
  useEffect(() => {
    const timeOutId = setTimeout(() => setVal(searchText), delay);

    return () => {
      window.clearTimeout(timeOutId);
    };
  }, [searchText, delay]);
  return debouncedTerm;
}
