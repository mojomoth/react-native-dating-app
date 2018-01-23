import { FETCH_BOARDS_FULFILLED, FETCH_BOARDS_REJECTED, FETCH_TEST_FULFILLED } from '../actions';

const INITIAL_STATE = {
  test: 'init',
  boards: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_TEST_FULFILLED:
      return {
        ...state,
        test: payload,
      };
    case FETCH_BOARDS_FULFILLED:
      return {
        ...state,
        boards: payload,
      };
    case FETCH_BOARDS_REJECTED:
      return {
        ...state,
        showError: true,
        error: payload,
      };
    default:
      return state;
  }
};
