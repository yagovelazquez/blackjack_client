import { useContext } from 'react';
import Headings from '../../../shared/components/texts/Heading';
import { UserContext } from '../../../contexts/userContext';
import Deal from './Deal';
import usePlayerActions from '../hooks/usePlayerActions';
import { AnimatePresence, motion } from 'framer-motion';
import HitOrStand from './HitOrStand';
import _ from 'lodash'

function Game({ gameId }) {
  const { user } = useContext(UserContext);
  const { dealHandler, hitHandler, standHandler, handData } =
    usePlayerActions({ gameId });

  return (
    <div className="relative w-full h-full">
      <Headings className={'text-white absolute right-10 top-4'} variant={'h2'}>
        Balance: {user.balance}$
      </Headings>
      {handData.winner && (
        <div className="text-white">WINNER: {handData.winner}</div>
      )}
      <AnimatePresence initial={false}>
        {(_.isEmpty(handData) || handData.winner) ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            key="dealComponent"
          >
            <Deal onDeal={dealHandler} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className="h-full"
            key="dealComponent"
          >
            <HitOrStand
              handData={handData}
              onHit={hitHandler}
              onStand={standHandler}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Game;
