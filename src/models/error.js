import { query403, query401, query404, query500 } from '../services/error';
import delay from 'oni-delay';
export default {
  namespace: 'error',

  state: {
    error: '',
    isloading: false,
  },

  effects: {
    *query403(_, { call, put }) {
      yield call(query403);
      yield put({
        type: 'trigger',
        payload: '403',
      });
    },
    *query401(_, { call, put }) {
      yield call(query401);
      yield put({
        type: 'trigger',
        payload: '401',
      });
    },
    *query500(_, { call, put }) {
      yield call(query500);
      yield put({
        type: 'trigger',
        payload: '500',
      });
    },
    *query404(_, { call, put }) {
      yield call(query404);
      yield put({
        type: 'trigger',
        payload: '404',
      });
    },
    *throwError() {
      yield delay(0);
      throw new Error('hi error');
    },
  },

  reducers: {
    trigger(state, action) {
      return {
        error: action.payload,
      };
    },
  },
};
