import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import undoable from 'redux-undo';

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
      if (state.presetColors.indexOf(state.currentColor) !== -1) return state;
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
    case 'SELECT_LAYER':
      // TODO: Layer size shouldn't be fixed
      return {
        ...state,
        selectedIndexes: [
          ...state.selectedIndexes,
          ...Array(25).fill().map((e, i) => i + 25 * action.payload.id)
        ]
      };
    case 'DESELECT_LAYER':
      // TODO: Layer size shouldn't be fixed
      return {
        ...state,
        selectedIndexes: state.selectedIndexes.filter(id => {
          return id < action.payload.id * 25 || id >= action.payload.id * 25 + 25;
        })
      };
    default:
      return state;
  }
};

const ui = (state = {
  drawerOpen: false,
  createProjectDialogOpen: false
}, action) => {
  switch (action.type) {
    case 'SET_DRAWER':
      return {
        ...state,
        drawerOpen: action.payload.open
      }
    case 'SET_CREATE_PROJECT_DIALOG':
      return {
        ...state,
        createProjectDialogOpen: action.payload.open
      }
    default:
      return state;
  }
};

export default createStore(
  combineReducers({
    editor: undoable(editor),
    ui,
    routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
