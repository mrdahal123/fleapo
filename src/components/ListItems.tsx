import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { LIST } from '../utils/globalJson';
import { COLORS, FONTS, ICONS } from '../utils/theme';
import { ms } from '../utils/resize';
import typography from '../utils/typography';
import CustomButton from './CustomButton';

interface ListItem {
    id: string;
    title: string;
    description: string;
    restaurants: number;
    likes: string;
    icon: ImageSourcePropType;
}



const ListItemComponent: React.FC<{ item: ListItem }> = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Image source={item?.icon} style={styles.icon} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={[typography.body, { fontSize: ms(10), marginBottom: 5, }]}>{item.description}</Text>
            <Text style={styles.details}>{`${item.restaurants} restaurants •  ${item.likes}`}</Text>
        </View>
        <TouchableOpacity>
        <Image source={ICONS.rightForward} style={styles.rightForward} />

        </TouchableOpacity>
    </TouchableOpacity>
);

const ListItems: React.FC = () => {
    return (
        <FlatList
            data={LIST}
            renderItem={({ item }) => <ListItemComponent item={item} />}
            keyExtractor={(item) => item.id}
            ListFooterComponent={() => (

                <CustomButton isProfile={true} title='see more' fullBtn={true} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: ms(10),
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        alignItems: 'center'
    },
    icon: {
        width: ms(40),
        height: ms(40),
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        textAlign: 'left',
        color: COLORS.light,
        fontSize: ms(12),
        fontFamily: FONTS.Avenir.avenirMedium,
        fontWeight: '700',
        textTransform: 'capitalize'
    },

    details: {
        color: 'white',
        fontSize: 12,
    },
    rightForward:{
        width:ms(14),
        height:ms(14),
        resizeMode:'contain',
        marginLeft:ms(5)
    }
});

export default ListItems;
