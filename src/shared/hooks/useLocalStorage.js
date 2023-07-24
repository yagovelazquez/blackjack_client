import { useCallback } from 'react';

function useLocalStorage() {
  const retrieveItem = useCallback(({ key }) => {
    const storagedItem = localStorage.getItem(key);
    const parsedItem = JSON.parse(storagedItem);
    return storagedItem ? parsedItem : null;
  }, []);

  const setItem = useCallback(({ key, data }) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const clearItem = useCallback(({ key }) => {
    localStorage.removeItem(key);
  }, []);

  return { retrieveItem, clearItem, setItem };
}

export default useLocalStorage;
