import { createStore } from 'redux';

const editor = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COLOR':
      return {
        ...state,
        currentColor: action.payload.color
      };
    default:
      return state;
  }
};

export default createStore(
  editor,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
