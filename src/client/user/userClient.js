import { apiUrl } from '../../config/config';
import { camelizeData } from '../../shared/helpers/data';
import { request } from '../baseClient';

const register = async (userData) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };
  const data = await request(`${apiUrl}/user/register/`, options);
  return camelizeData(data);
};

const signIn = async (userData) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const data = await request(`${apiUrl}/user/login/`, options);
  return camelizeData(data);
};

export const userClient = {
  register,
  signIn
};
