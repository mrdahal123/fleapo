import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/theme";
import { ms } from "../../../utils/resize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS?.primary,
        padding: ms(15)
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: ms(10),
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        alignItems: 'center'
    },
    icon: {
        width: ms(50),
        height: ms(50),
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',

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
    rightForward: {
        width: ms(14),
        height: ms(14),
        resizeMode: 'contain',
        marginLeft: ms(5)
    },
    searchCont: {
        width: '100%',
        paddingHorizontal: ms(15),
        paddingVertical:ms(8),
        borderWidth: 2,
        borderColor: COLORS?.dark,
        borderRadius: ms(30),
        backgroundColor:COLORS.secondary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    searchIcon:{
        width:ms(22),
        height:ms(22),
        resizeMode:'contain'
    },
    input:{
        width:'90%',
        color:COLORS.light,
        fontSize:ms(12)
        
    }
})