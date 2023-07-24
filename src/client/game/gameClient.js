import { apiUrl } from '../../config/config';
import { camelizeData } from '../../shared/helpers/data';
import { request } from '../baseClient';

const start = async ({ accessToken }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  };
  const data = await request(`${apiUrl}/game/start`, options);
  return camelizeData(data);
};

export const gameClient = {
  start,
};
