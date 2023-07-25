import Button from '../../../shared/components/button/Button';
import { BsFilePlus } from 'react-icons/bs';
import { TbHandStop } from 'react-icons/tb';
import { MdReplay } from 'react-icons/md';
import GameCards from './GameCards';
import { Fragment, useMemo } from 'react';
import Headings from '../../../shared/components/texts/Heading';

function HitOrStand({ onHit, onStand, handData, onPlayAgain }) {
  const winner = useMemo(() => {
    if (handData.winner === 'draw') {
      return 'Draw!';
    }
    return handData?.winner + ' won!';
  }, [handData.winner]);
  return (
    <div className="text-white relative flex h-full w-full justify-between items-center">
      <Fragment>
        {handData.winner ? (
          <div className="w-full flex-col gap-2 justify-center items-center flex">
            <Headings className={'capitalize'} variant={'h1'}>
              {winner}
            </Headings>
            <Button
              onClick={onPlayAgain}
              className="text-[20px] py-[12px] gap-2"
              iconAfter={<MdReplay />}
            >
              Play again
            </Button>
          </div>
        ) : (
          <Fragment>
            <Button
              onClick={onHit}
              className="text-[25px] py-[12px] ml-40 px-[40px] border border-black gap-2"
              iconBefore={<BsFilePlus />}
            >
              Hit
            </Button>
            <Button
              onClick={onStand}
              className="text-[25px] mr-40 py-[12px] px-[40px] border border-black gap-2"
              iconBefore={<TbHandStop />}
            >
              Stand
            </Button>
          </Fragment>
        )}
        <GameCards handData={handData} />
      </Fragment>
    </div>
  );
}

export default HitOrStand;
