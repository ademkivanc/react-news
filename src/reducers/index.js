import { combineReducers } from 'redux';

const news = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return action.obj;
    default:
      return state
  }
}

const newsDrawerState = (state = false, action) => {
  switch (action.type) {
    case 'NEWS_DRAWER_STATE':
      return action.isShow;
    default:
      return state
  }
}

const allReducer = combineReducers({ news, newsDrawerState });

export default allReducer;