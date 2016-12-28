import { connect } from 'react-redux';
import FrameSelector from '../components/FrameSelector';
import { addFrame, duplicateFrame, setFrame } from '../actions.js';

const mapStateToProps = (state) => {
  return {
    currentFrame: state.editor.present.currentFrame,
    frameCount: state.editor.present.frameCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (frame) => {
      if (frame === -1) {
        dispatch(addFrame());
      } else if (frame === -2) {
        dispatch(duplicateFrame());
      } else {
        dispatch(setFrame(frame));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameSelector);
