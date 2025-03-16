import React, { useState } from 'react';
import { View, Text, ImageSourcePropType, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles';
import Headertab from '../../../components/Headertab';
import typography from '../../../utils/typography';
import { COLORS, FONTS, ICONS } from '../../../utils/theme';
import { User_list } from '../../../utils/globalJson';
import { ms } from '../../../utils/resize';

const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Friends');

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
    console.log('Selected tab:', tab);
  };



  interface peopleList {
    id: string;
    title: string;
    avatar: ImageSourcePropType;
    address: string,

  }
  const renderItem = ({ item }: { item: peopleList }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item?.avatar} style={styles.icon} />
      <View style={styles.textContainer}>
        <View style={styles.flexRow}>
        <Text style={styles.title}>{item.title}</Text>
        {item.id == '2'  &&
        <Image source={ ICONS?.Badge } style={[styles.rightForward,{marginRight:0}]}/>}
        </View>
        <Text style={[typography.body, { fontSize: ms(10), marginBottom: 5, }]}>{item.address}</Text>
      </View>
      <TouchableOpacity>
        <Image source={ICONS.rightForward} style={styles.rightForward} />

      </TouchableOpacity>
    </TouchableOpacity>
  )


  return (

    <SafeAreaView style={styles.container}>
      <Text style={[typography.titleWithShadow, { fontFamily: FONTS.Avenir.avenirMedium }]} >People</Text>
      <Headertab selectedTab={selectedTab} onSelectTab={handleTabSelect} />
      <FlatList data={User_list} renderItem={renderItem} />
      <View style={styles.searchCont}>
        <TouchableOpacity>
          <Image source={ICONS.search} style={styles.searchIcon}/>
                  </TouchableOpacity>
                  <TextInput placeholder='search people ..' placeholderTextColor={COLORS?.gray} style={styles.input}/>
      </View>
    </SafeAreaView>
  )
}



export default ProfileScreen;