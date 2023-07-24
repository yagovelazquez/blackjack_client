import { useCallback, useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { gameActionsClient } from '../../../client/game/gameActionsClient';
import { cacheKeys } from '../../../config/config';
import { UserContext } from '../../../contexts/userContext';

function usePlayerActions({ gameId }) {
  const { user } = useContext(UserContext);
  const [handData, setHandData] = useState({})
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutateAsyncDeal,
    data: dealData,
    isLoading: isLoadingDeal,
  } = useMutation(gameActionsClient.deal, {
    mutationKey: cacheKeys.mutation.deal,
    onSuccess: (bodyData) => {
      queryClient.invalidateQueries([cacheKeys.user]);
      setHandData(bodyData.data)
    },
  });

  console.log(dealData, 'dealer data')

  const dealHandler = useCallback(
    (betValue) => {
      if (!betValue || betValue < 0) return;
      mutateAsyncDeal({ accessToken: user.accessToken, betValue, gameId });
    },
    [gameId, mutateAsyncDeal, user.accessToken]
  );

  const {
    mutateAsync: mutateAsyncHit,
    data: dataHit,
    isLoading: isLoadingHit,
  } = useMutation(gameActionsClient.hit, {
    mutationKey: cacheKeys.mutation.hit,
    onSuccess: (bodyData) => {
      queryClient.invalidateQueries([cacheKeys.user]);
      console.log(bodyData)
      setHandData(bodyData.data)
    },
  });

  const hitHandler = useCallback(() => {
    mutateAsyncHit({
      accessToken: user.accessToken,
      tableHandId: dealData?.data?.tableHandId,
      gameId,
    });
  }, [dealData, gameId, mutateAsyncHit, user.accessToken]);


  const {
    mutateAsync: mutateAsyncStand,
    data: dataStand,
    isLoading: isLoadingStand,
  } = useMutation(gameActionsClient.stand, {
    mutationKey: cacheKeys.mutation.deal,
    onSuccess: (bodyData) => {
      queryClient.invalidateQueries([cacheKeys.user]);
      setHandData(bodyData.data)
    },
  });


  const standHandler = useCallback(() => {
    mutateAsyncStand({
      accessToken: user?.accessToken,
      tableHandId: dealData?.data?.tableHandId,
      gameId,
    });
  }, [dealData?.data?.tableHandId, gameId, mutateAsyncStand, user?.accessToken]);

  return {
    dealHandler,
    dealData,
    isLoadingDeal,
    hitHandler,
    dataHit,
    isLoadingHit,
    handData,
    dataStand,
    isLoadingStand,
    standHandler,
  };
}

export default usePlayerActions;
