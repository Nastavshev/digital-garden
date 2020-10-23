import { SUPPORT } from './actionTypes';

const setSupport = (flag) => ({
  type: SUPPORT,
  payload: flag,
});

export { setSupport };
