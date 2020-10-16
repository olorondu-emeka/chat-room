import generateToken from './generateToken';
import getUserAgent from './getUserAgent';
import serverResponses from './serverResponse';
import expiryDate from './expiryDate';
import get24hrTime from './get24hrTime';

const { serverError, serverResponse } = serverResponses;

export {
  serverResponse,
  serverError,
  generateToken,
  getUserAgent,
  expiryDate,
  get24hrTime
};
