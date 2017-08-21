import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursessuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursessuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}
