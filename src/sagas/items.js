import {
  call,
  put,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ITEMS_SUCCESS,
} from '../actions';

const URL = 'http://www.snagfilms.com/apis/films.json';

export default function* ItemsSaga() {
  const response = yield call(axios, URL);
  yield console.log('items in saga: ', response);
  yield put({
    type: GET_ITEMS_SUCCESS,
    payload: response.data.films.film,
  });
}
