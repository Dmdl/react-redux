import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursessuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCESS, course};
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
