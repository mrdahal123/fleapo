import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { ms } from '../utils/resize';
import { COLORS, FONTS, ICONS } from '../utils/theme';

interface RestaurantItem {
    id: string;
    name: string;
    rating: number;
    image: ImageSourcePropType;
}

interface RestaurantGridProps {
    data: RestaurantItem[];

}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({ data,  }) => {
    const renderItem = ({ item }: { item: RestaurantItem }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Image source={ICONS.Score} style={styles.ratingBadge} />
            {/* <View style={styles.ratingBadge}>
                // <Text style={styles.ratingText}>{item.rating}</Text>
            </View> */}
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={4}
            columnWrapperStyle={styles.row}
        />
    );
};

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        margin: 2,
    },
    card: {
        width: '24%',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: ms(80),
        borderRadius:ms(8)
    },
    ratingBadge: {
        position: 'absolute',
        top: ms(22),
        left: ms(25),
        padding: 5,
        borderRadius: 50,
        width: ms(35),
        height: ms(35),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingText: {
        color: 'white',
        fontWeight: 'bold',
    },
    name: {
        textAlign: 'left',
        marginVertical: ms(12),
        color: COLORS.light,
        fontSize:ms(12),
        fontFamily:FONTS.Avenir.avenirMedium,
        fontWeight:'700'
    },
});

export default RestaurantGrid;
