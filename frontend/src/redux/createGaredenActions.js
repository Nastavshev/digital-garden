import { CREATE_GARDEN } from '../redux/actionTypes';

export const createGarden = (garden) => ({ type: CREATE_GARDEN, payload: garden });
