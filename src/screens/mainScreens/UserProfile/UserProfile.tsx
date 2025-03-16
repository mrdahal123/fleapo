import { FlatList, Image, ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ICONS, IMAGES } from '../../../utils/theme'
import { ms } from '../../../utils/resize'
import typography from '../../../utils/typography'
import CustomButton from '../../../components/CustomButton'
import { restaurantData } from '../../../utils/globalJson';
import RestaurantGrid from '../../../components/ResturentGrid'
import ListItems from '../../../components/ListItems'

const UserProfile = () => {

  interface recentActivity {
    id: string;
    name: string;
    rating: number;
    image: ImageSourcePropType;
    address: string
  }
  const renderItem = ({ item }: { item: recentActivity }) => (
    <TouchableOpacity style={styles.recentViewRow}>
      <View style={styles.flexRow}>
        <View style={styles.resturentImageWrapper}>
          <Image source={item.image} style={styles.fullImage} />
        </View>
        <View>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={[typography.body, { fontSize: ms(10) }]}>{item?.address}</Text>
        </View>

      </View>
      <View style={styles.flexRow}>
        <Image source={ICONS.Score} style={styles.ratingBadge} />
        <Image source={ICONS.rightForward} style={styles.rightForward} />
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={IMAGES.backgroundMap} style={styles.MapContainer} />
        {/* profile wrapper */}
        <View style={styles.userContentWrapper}>
          <View style={styles.profileDetails}>
            <View style={styles.flexRow}>
              <Text style={typography.caption}>chhetrisauravof</Text>
              <Image source={ICONS.Badge} style={styles.badgeIcon} />
            </View>
            <Text style={typography.titleWithShadow}>SAURAV CHHETRI</Text>
            <Text style={typography.body}>Los Angeles, CA</Text>
            <CustomButton fullBtn={false} isProfile={true} title='follow' icon={ICONS.like} />
          </View>
          <View style={styles?.profile}>
            <Image source={IMAGES.UserProfile} style={styles.fullImage} />
          </View>
        </View>
        {/* Devider  */}
        <View style={styles.devider} />
        {/* Resturent View */}
        <View style={styles.resturentWrapper}>
          <Text style={[typography.subHeaderWithShadow, {
            marginBottom: ms(10)
          }]}>Saurav's Top {restaurantData?.length}</Text>
          {/* Resturent list component */}
          <RestaurantGrid data={restaurantData} />
        </View>
        {/* Devider  */}
        <View style={styles.devider} />
        {/* Recenet activity */}
        <View style={styles.resturentWrapper}>
          <Text style={[typography.subHeaderWithShadow, {
            marginBottom: ms(10)
          }]}>Recenet Activity</Text>
          <FlatList data={restaurantData?.slice(0, 4)} renderItem={renderItem} ListFooterComponent={() => (

            <CustomButton isProfile={true} title='see more' fullBtn={true} />
          )} />
        </View>
        {/* dummy graph data  */}
        <Image source={IMAGES.graph} style={styles.graph} />

        {/* Lists */}
        <View style={styles.devider} />
        <View style={styles.resturentWrapper}>
        <ListItems />
        </View>
        <View style={styles.devider} />

        {/* folowing and hitlist */}
        <View style={styles.listView}>
          <View style={styles.flexRow}>
            <Image source={ICONS.peopleInactive} style={styles.iconImage}/>
            <Text style={styles.name}>Following</Text>
          </View>
          <TouchableOpacity style={styles.flexRow}>
          <Text style={styles.name}>3</Text>
          <Image source={ICONS.rightForward} style={styles.rightForward}/>
          </TouchableOpacity>
        </View>
        <View style={styles.listView}>
          <View style={styles.flexRow}>
            <Image source={ICONS.hitlist} style={styles.iconImage}/>
            <Text style={styles.name}>Hitlist</Text>
          </View>
          <TouchableOpacity style={styles.flexRow}>
          <Text style={styles.name}>2</Text>
          <Image source={ICONS.rightForward} style={styles.rightForward}/>
          </TouchableOpacity>
        </View>

        {/* uder profile ends here  */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile

