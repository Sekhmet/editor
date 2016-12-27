export const setCurrentColor = (color) => {
  return {
    type: 'SET_CURRENT_COLOR',
    payload: {
      color
    }
  };
};

export const addColorToPresets = () => {
  return {
    type: 'ADD_COLOR_TO_PRESETS'
  };
};
