import { useCallback, useContext, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { gameClient } from '../../client/game/gameClient';
import { UserContext } from '../../contexts/userContext';
import { blackjack, table } from '../../shared/assets/img';
import Button from '../../shared/components/button/Button';
import Game from './components/Game';

function Blackack(props) {
  const { user } = useContext(UserContext);

  const {
    mutateAsync: mutateAsyncStart,
    data: startData,
  } = useMutation(gameClient.start);

  const startHandler = useCallback(() => {
    mutateAsyncStart({ accessToken: user.accessToken });
  }, [mutateAsyncStart, user.accessToken]);

  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url(${startData ? table : blackjack})`,
    };
  }, [startData]);

  return (
    <div
      className="w-[900px] bg-contain bg-no-repeat h-[600px] flex items-end justify-center "
      style={containerStyle}
    >
      {!startData ? (
        <Button
          onClick={startHandler}
          className="text-[28px] px-16 rounded mb-20 shadow-xl"
        >
          Start
        </Button>
      ) : (
        <Game gameId={startData.data.id} />
      )}
    </div>
  );
}

export default Blackack;
