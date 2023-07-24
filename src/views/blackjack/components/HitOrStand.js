import Button from '../../../shared/components/button/Button';
import { BsFilePlus } from 'react-icons/bs';
import { TbHandStop } from 'react-icons/tb';
import GameCards from './GameCards';

function HitOrStand({ onHit, onStand, handData }) {
  return (
    <div className="text-white relative flex h-full w-full justify-between items-center">
      <Button
        onClick={onHit}
        className="text-[25px] py-[12px] ml-40 px-[40px] border border-black gap-2"
        iconBefore={<BsFilePlus />}
      >
        Hit
      </Button>
      <GameCards handData={handData} />
      <Button
        onClick={onStand}
        className="text-[25px] mr-40 py-[12px] px-[40px] border border-black gap-2"
        iconBefore={<TbHandStop />}
      >
        Stand
      </Button>
    </div>
  );
}

export default HitOrStand;
