import { StyleSheet, TextStyle } from 'react-native';
import { COLORS, FONTS } from './theme';
import { ms } from './resize';

interface Typography {
  header: TextStyle;
  title: TextStyle;
  titleWithShadow: TextStyle;
  subHeaderWithShadow: TextStyle;
  body: TextStyle;
  caption: TextStyle;
  button: TextStyle;
}

const typography: Typography = StyleSheet.create({
  header: {
    fontSize: ms(24),
    color: COLORS.light,
    fontFamily: FONTS.Avenir.avenirBold
  },
  title: {
    fontSize: ms(22),
    fontWeight: '600',
    color: COLORS.light,
    fontFamily: FONTS.OpenSans.SemiBold,
  },
  titleWithShadow: {
    fontSize: ms(22),
    fontWeight: '600',
    color: COLORS.light,
    fontFamily: FONTS.OpenSans.SemiBold,
    textShadowColor: 'rgba(0, 0, 0, 0.9)', // Dark shadow
    textShadowOffset: { width: 5, height: 5 }, // X and Y axis offset
    textShadowRadius: 5, // Blur radius
  },
  subHeaderWithShadow: {
    fontSize: ms(16),
    fontWeight: '600',
    color: COLORS.light,
    fontFamily: FONTS.OpenSans.SemiBold,
    textShadowColor: 'rgba(0, 0, 0, 0.9)', // Dark shadow
    textShadowOffset: { width: 5, height: 5 }, // X and Y axis offset
    textShadowRadius: 5, // Blur radius
  },
  body: {
    fontSize: ms(14),
    fontFamily: FONTS.OpenSans.Medium,
    color: COLORS.gray,
  },
  caption: {
    fontSize: ms(10),
    fontFamily: FONTS.OpenSans.Medium,
    color: COLORS.light,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default typography;
