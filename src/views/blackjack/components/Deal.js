import { Fragment } from 'react';
import Chips from './Chips';
import { IoArrowUndoSharp } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import Headings from '../../../shared/components/texts/Heading';
import Button from '../../../shared/components/button/Button';
import useBetData from '../hooks/useBetData';

function Deal({ onDeal }) {
  const { removeValueHandler, clearValueHandler, addValueHandler, betData } =
    useBetData();
  return (
    <Fragment>
      <div className="absolute right-10 bottom-10">
        <Button
          onClick={() => onDeal(betData.value)}
          className="mb-5 text-[30px] px-12"
        >
          Deal
        </Button>
        <div className="border-white w-[250px] p-5 items-center border-2 flex-col flex">
          <div className="flex justify-center gap-2 items-center">
            <IoArrowUndoSharp
              onClick={removeValueHandler}
              className="w-16 h-16 cursor-pointer text-white"
            />
            <TfiClose
              onClick={clearValueHandler}
              className="w-12 h-12 text-white cursor-pointer"
            />
          </div>
        </div>
        <Headings className={'text-white font-bold'} variant={'h1'}>
          Bet: {betData.value}$
        </Headings>
      </div>
      <div className="bottom-10 left-10 absolute">
        <Chips onAddValue={addValueHandler} />
      </div>
    </Fragment>
  );
}
export default Deal;
