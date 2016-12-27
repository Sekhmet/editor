import React from 'react';

import ColorPaletteContainer from '../../containers/ColorPaletteContainer';
import FrameSelectorContainer from '../../containers/FrameSelectorContainer';
import LayerContainer from '../../containers/LayerContainer';

const Editor = () => (
  <div>
    <ColorPaletteContainer />
    <FrameSelectorContainer />
    <LayerContainer />
  </div>
);

export default Editor;
