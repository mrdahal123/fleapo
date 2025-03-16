import { Dimensions, Platform, useWindowDimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale; // width of the component, padding, margin, paddingHorizontal, marginHorizontal, responsive border radius for the card
export const vs = verticalScale; // height of the component, vertical padding, vertical margin
export const ms = moderateScale; // font size
export const mvs = moderateVerticalScale; // margin using minimum scale
export const full_height = height; // full height
export const full_width = width; // full width