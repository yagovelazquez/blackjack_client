import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  const { suit, value } = props;
  const cardColorClass = suit === '♣︎' || suit === '♠︎' ? styles['card-black'] : styles['card-red'];

  return (
    <div className={`${styles.card} ${cardColorClass}`}>
      <div className={styles['card-tl']}>
        <div className={styles['card-value']}>{value}</div>
        <div className={styles['card-suit']}>{suit}</div>
      </div>
      <div className={styles['card-br']}>
        <div className={styles['card-value']}>{value}</div>
        <div className={styles['card-suit']}>{suit}</div>
      </div>
    </div>
  );
};

export default Card;