import { Fragment, useMemo } from 'react';
import Card from '../../../shared/components/cards/Card';
import { CardConverter } from '../../../shared/components/cards/helpers';

function GameCards({ handData }) {
  const { playerCards, dealerCards } = useMemo(() => {
    const cardConverter = new CardConverter({
      playerCards: handData?.player?.cards,
      dealerCards: handData?.dealer?.cards,
    });
    cardConverter.convertDealtCards();
    return {
      playerCards: cardConverter.playerCards,
      dealerCards: cardConverter.dealerCards,
    };
  }, [handData?.dealer?.cards, handData?.player?.cards]);
  return (
    <Fragment>
      <div className={`bottom-20 w-full justify-center flex absolute`}>
        {playerCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className={`top-20 w-full justify-center flex absolute`}>
        {dealerCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </Fragment>
  );
}

export default GameCards;
