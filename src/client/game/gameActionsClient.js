import { apiUrl } from '../../config/config';
import { snakizeData, camelizeData } from '../../shared/helpers/data';
import { request } from '../baseClient';

const deal = async ({ gameId, accessToken, betValue }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(snakizeData({ betValue })),
  };
  const data = await request(`${apiUrl}/game/${gameId}/deal`, options);
  return camelizeData(data);
};

const hit = async ({ gameId, accessToken, tableHandId }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  };
  const data = await request(`${apiUrl}/game/${gameId}/hit?&hand_id=${tableHandId}`, options);
  return camelizeData(data);
};

const stand = async ({ gameId, accessToken, tableHandId }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  };
  const data = await request(`${apiUrl}/game/${gameId}/stand?&hand_id=${tableHandId}`, options);
  return camelizeData(data);
};

export const gameActionsClient = {
  deal,
  hit,
  stand
};
