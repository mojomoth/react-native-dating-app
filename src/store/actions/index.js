export const FETCH_TEST = 'FETCH_TEST';
export const FETCH_TEST_FULFILLED = 'FETCH_TEST_FULFILLED';

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const FETCH_BOARDS_REJECTED = 'FETCH_BOARDS_REJECTED';
export const FETCH_BOARDS_FULFILLED = 'FETCH_BOARDS_FULFILLED';

export const fetchTest = () => ({
  type: FETCH_TEST,
});

export const fetchTestFulfilled = data => ({
  type: FETCH_TEST_FULFILLED,
  payload: data,
});

export const fetchBoards = () => ({
  type: FETCH_BOARDS,
});

export const fetchBoardsRejected = error => ({
  type: FETCH_BOARDS_REJECTED,
  payload: error,
});

export const fetchBoardsFulfilled = boards => ({
  type: FETCH_BOARDS_FULFILLED,
  payload: boards,
});
