import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from '../screens/mainScreens/UserProfile/UserProfile';
import PeopleScreen from '../screens/mainScreens/PeopleScreen/PeopleScreen';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { ms } from '../utils/resize';
import { COLORS, FONTS, ICONS, IMAGES } from '../utils/theme';
import { Text } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopWidth: 0, // Optional: Remove the top border
          height: ms(60)
        }
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <View
                  style={[
                    styles.TabView
                  ]}>
                  <Image source={focused ? ICONS.people : ICONS.peopleInactive} style={styles.icon} />
                  <Text style={[styles.labelText, { color: focused ? COLORS.light : COLORS.gray }]}>People</Text>
                </View>

              </>
            );
          },
        }} name="PeopleScreen" component={PeopleScreen} />
      <Tab.Screen name="UserProfile" component={UserProfile } options={{
        tabBarIcon: ({ focused }) => {
          return (
            <>
              <View
                style={
                  styles.TabView}>
                <Image source={IMAGES.user} style={styles.icon} />
                <Text style={[styles.labelText, { color: focused ? COLORS.light : COLORS.gray }]}>profile</Text>
              </View>

            </>
          );
        },
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  TabView: {
    width: ms(150),
    alignItems: 'center',
    marginTop: ms(10),
    height: '100%',
  },
  icon: {
    width: ms(30),
    height: ms(30),
  },
  labelText: {
    fontSize: ms(10),
    textTransform: 'uppercase',
    fontFamily: FONTS.Avenir.avenirMedium,
    paddingVertical: ms(4),

  },

})