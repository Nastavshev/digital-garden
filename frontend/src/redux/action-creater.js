import { GET_VEGETABLES_DB, GET_MOONCALENDAR_DB } from './actionTypes';

export function getTasks(vegetablesArray) {
  return {
    type: GET_VEGETABLES_DB,
    payload: vegetablesArray,
  };
}

export function getVegetThunk() {
  return async function (dispatch) {
    const response = await fetch('/vegetables');
    const result = await response.json();
    dispatch(getTasks(result.vegetFromBD));
  };
}
export function getMonth(monthArray) {
  return {
    type: GET_MOONCALENDAR_DB,
    payload: monthArray,
  };
}

export function getMonthThunk() {
  return async function (dispatch) {
    try {
    const response = await fetch('/moonmonth');
    const result = await response.json();
    dispatch(getMonth(result.monthFromBD));
    } catch (error) {
      console.log(error);
    }
  };
}