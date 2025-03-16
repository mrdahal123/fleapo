import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms } from '../utils/resize';
import { COLORS } from '../utils/theme';
const Headertab: React.FC<{ selectedTab: string, onSelectTab: (tab: string) => void }> = ({ selectedTab, onSelectTab }) => {
  const tabs = ['Friends', 'Verified', 'Everyone'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map(tab => (
        <TouchableOpacity style={[styles.tab,selectedTab === tab && styles.activeTabView]} key={tab} onPress={() => onSelectTab(tab)}>
          <Text style={[styles.tabText, selectedTab === tab && styles.activeTab]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Headertab

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:ms(50),
    backgroundColor: '#222',
    borderRadius:ms(30),
    marginVertical:ms(15),
    borderWidth: ms(4),
    alignItems:'center',
    borderColor: COLORS?.dark,
    shadowColor: COLORS?.dark,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  tab:{
    height:'100%',
    width:'33%',
    alignItems:'center',
    justifyContent:'center'
  },
  tabText: {
    color: 'gray',
    fontSize: 16,
   
  },
  activeTab: {
    fontWeight: 'bold',
    color: COLORS.dark
  },
  activeTabView:{
    width:'33%',
    borderRadius:ms(30),
    backgroundColor:COLORS.light,
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  }
  
})