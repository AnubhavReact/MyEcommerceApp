import {Dimensions, PixelRatio} from 'react-native';
import Store from '../components/redux/store';
//DYNAMIC UI FUNCTIONS

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

//FONT SCALING
//Usage: nf(16)

const scale = SCREEN_WIDTH / 375;

const normalizeFont = size => {
  let scaleFont = 0;

  if (Store) {
    scaleFont = Store.getState()?.Global?.fontScale;
  }
  let newSize = size * scale + scaleFont;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) * 0.8;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) * 0.8;
  }
};

//Scale height/ width

//Usage: wpx(141), hpx(220)

const widthFromPixel = (widthPx, w = 428) => {
  const newSize = widthPx * (SCREEN_WIDTH / w);
  return newSize;
};

const heightFromPixel = (heightPx, h = 926) => {
  const newSize = heightPx * (SCREEN_HEIGHT / h);
  return newSize;
};

export {
  widthFromPixel as wpx,
  heightFromPixel as hpx,
  normalizeFont as nf,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
};

