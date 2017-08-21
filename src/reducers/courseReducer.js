import * as types from '../actions/actionTypes';
import initialstate from './initialState';

export default function courseReducer(state = initialstate.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
