import { GET_VEGETABLES_DB, GET_MOONCALENDAR_DB, GET_ARTICLE_DB, PAGE_THEME, PAGE_DEFAULT, UPDATE_COMMENTS_ARRAY } from './actionTypes';

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


export function getArticleThunk() {
  return async function (dispatch) {
    try {
    const response = await fetch('/articles');
    const result = await response.json();
    dispatch(getArticle(result.articlesFromBD));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getArticle(articleArray) {
  return {
    type: GET_ARTICLE_DB,
    payload: articleArray,
  };
}

export function setPageNumber(pageNumber) {
  return {
    type: PAGE_THEME,
    payload: pageNumber,
  }
}

export function updateArrayComment(task) {
  return {
    type: UPDATE_COMMENTS_ARRAY,
    payload: task,
  };
}

export function pageDefault() {
  return {
    type: PAGE_DEFAULT,
  }
}