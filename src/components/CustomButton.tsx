import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet, ImageSourcePropType } from 'react-native';
import { ms } from '../utils/resize';
import { COLORS, FONTS } from '../utils/theme';

interface ButtonProps {
  title: string;
  icon?: ImageSourcePropType,
  isProfile: boolean,
  fullBtn: boolean,
 
}

const CustomButton: React.FC<ButtonProps> = ({ title, icon, isProfile, fullBtn, }) => (
  <TouchableOpacity style={[styles.button, {
    marginTop: isProfile ? ms(10) : 0,
    width: fullBtn ? '100%' : ms(120),
  }]}>
    <View style={styles.iconWrapper}>
      {icon && <Image source={icon} style={styles.icon} />}
    </View>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: ms(120),
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: ms(10),
    borderRadius: ms(40),
    borderWidth: ms(4),
    borderColor: COLORS?.dark,
    shadowColor: COLORS?.dark,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  iconWrapper: {
    marginRight: ms(10),
  },
  text: {
    fontSize: ms(14),
    fontFamily: FONTS.Avenir.avenirMedium,
    textTransform: 'capitalize',
    color: COLORS.light,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  icon: {
    width: ms(15),
    height: ms(15),
    resizeMode: 'contain'
  },
});

export default CustomButton



