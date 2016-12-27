import { createStore } from 'redux';

const editor = (
  state = {
    currentColor: '#a4c639',
    presetColors: [],
    selectedIndexes: [],
    colors: [],
    currentFrame: 0,
    frameCount: 1
  },
  action) => {
  switch (action.type) {
    case 'SET_CURRENT_COLOR':
      return {
        ...state,
        currentColor: action.payload.color
      };
    case 'ADD_COLOR_TO_PRESETS':
      return {
        ...state,
        presetColors: [
          ...state.presetColors,
          state.currentColor
        ]
      };
    case 'TOGGLE_SELECTION':
      const id = action.payload.id;
      if (state.selectedIndexes.includes(id)) {
        return {
          ...state,
          selectedIndexes: state.selectedIndexes.filter(i => i !== id)
        };
      }
      return {
        ...state,
        selectedIndexes: [
          ...state.selectedIndexes,
          id
        ]
      };
    case 'SET_COLORS':
      return {
        ...state,
        colors: [
          ...state.colors,
          ...state.selectedIndexes.map(id => {
            return {
              id,
              frame: state.currentFrame,
              color: state.currentColor
            }
          })
        ],
        selectedIndexes: []
      };
    case 'ADD_FRAME':
      return {
        ...state,
        frameCount: state.frameCount + 1,
        currentFrame: state.frameCount
      };
    case 'DUPLICATE_FRAME':
      return {
        ...state,
        frameCount: state.frameCount + 1,
        currentFrame: state.frameCount,
        colors: [
          ...state.colors,
          ...state.colors
            .filter(color => color.frame === state.currentFrame)
            .map(color => {
              return {
                ...color,
                frame: state.frameCount
              }
            })
        ]
      };
    case 'SET_FRAME':
      return {
        ...state,
        currentFrame: action.payload.id
      }
    default:
      return state;
  }
};

export default createStore(
  editor,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
