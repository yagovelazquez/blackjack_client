import { useCallback, useState } from 'react';

function useBetData() {
  const [betData, setBetData] = useState({ value: 0, chips: [] });
  const addValueHandler = useCallback((value) => {
    setBetData((prev) => {
      return { value: value + prev.value, chips: [...prev.chips, value] };
    });
  }, []);

  const removeValueHandler = useCallback(() => {
    if (betData.chips.length === 0) return;
    setBetData((prev) => {
      const prevChips = [...prev.chips];
      prevChips.pop();
      return {
        value: prev.value - prev.chips[prev.chips.length - 1],
        chips: prevChips,
      };
    });
  }, [betData.chips]);

  const clearValueHandler = useCallback((value) => {
    setBetData((prev) => {
      return { value: 0, chips: [] };
    });
  }, []);

  return { clearValueHandler, removeValueHandler, addValueHandler, betData };
}

export default useBetData;
