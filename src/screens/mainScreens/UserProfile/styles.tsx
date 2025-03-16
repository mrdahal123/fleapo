import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/theme";
import { full_width, ms } from "../../../utils/resize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS?.primary
    },
    MapContainer: {
        width: full_width,
        height: ms(250)
    },
    userContentWrapper:{
        width:'100%',
        padding:ms(10),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    graph:{
        width: full_width,
        height: ms(150),
        resizeMode:'contain'
    },
    resturentWrapper:{
        width:'100%',
        paddingHorizontal:ms(10),
       
    },
    profile:{
        width:ms(96),
        height:ms(96),
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    fullImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
    },
    profileDetails:{
        justifyContent:'space-between',
        minHeight:ms(150)
    },
    badgeIcon:{
        width:ms(15),
        height:ms(15),
        marginHorizontal:ms(5)
    },
    flexRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    devider:{
        width:'100%',
        height:ms(1),
        marginVertical:ms(10),
        backgroundColor:COLORS?.gray
    },
    recentViewRow:{
        width:'100%',
        padding:ms(10),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderColor:COLORS.gray
    },
    resturentImageWrapper:{
        width:ms(45),
        height:ms(45),
        borderWidth: ms(3),
        overflow:'hidden',
        marginRight:ms(8),
        borderRadius:ms(8),
        borderColor: COLORS?.dark,
        shadowColor: COLORS?.dark,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    name: {
        textAlign: 'left',
        color: COLORS.light,
        fontSize:ms(12),
        fontFamily:FONTS.Avenir.avenirMedium,
        fontWeight:'700'
    },
    ratingBadge: {
        padding: 5,
        borderRadius: 50,
        width: ms(35),
        height: ms(35),
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightForward:{
        width:ms(15),
        height:ms(15),
        resizeMode:'contain',
        marginLeft:ms(5)
    },
    iconImage:{
        width:ms(30),
        height:ms(30),
        resizeMode:'contain',
        marginRight:ms(8)
    },
    listView:{
        width:'100%',
        padding:ms(10),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:ms(10)
    }
})