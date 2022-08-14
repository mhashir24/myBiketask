import React from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native-gesture-handler';



const GItem = [
    {
        id: "0",
        Text1: 'Language',
        Text2: 'English (United States)',
        icon2: 'chevron-small-right',
        color2: 'black',
        vectoricon: <Entypo
        style={{borderRadius:20, padding:8, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}
            name={'language'}
            size={20}
            color={'green'}
        />
    },

    {
        id: "1",
        Text1: 'Profile Settings',
        Text2: 'Change Password, Create PIN',
        icon2: 'chevron-small-right',
        color2: 'black',
        vectoricon: <SimpleLineIcons
        style={{borderRadius:20, padding:8, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}
            name={'user'}
            size={20}
            color={'green'}
        />
    },

    {
        id: "2",
        Text1: 'Notifications',
        Text2: 'Offers, Newsletter etc',
        icon2: 'switch',
        color2: 'green',
        vectoricon: <Ionicons
        style={{borderRadius:20, padding:8, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}
            name={'md-chatbox-ellipses-outline'}
            size={20}
            color={'green'}
        />
    },

    {
        id: "3",
        Text1: 'Privacy',
        Text2: 'Terms, Privacy',
        icon2: 'chevron-small-right',
        color2: 'black',
        vectoricon: <MaterialIcons
        style={{borderRadius:20, padding:8, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}
            name={'security'}
            size={20}
            color={'green'} />
    },

    {
        id: "4",
        icon1: 'language',
        Text1: 'Support',
        Text2: '24/7 Customer',
        icon2: 'chevron-small-right',
        color2: 'black',
        vectoricon: <Feather
        style={{borderRadius:20, padding:8, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}
            name={'headphones'}
            size={20}
            color={'green'} />
    },


]
const GeneralItem = () => {
    return (
        <FlatList
            data={GItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (

                    <View style={{
                        position: 'relative', overflow: 'hidden',  borderWidth: 0.2, borderBottomWidth:3, borderRightWidth:3, borderColor:'#e6e6fa', borderRadius:10,paddingVertical: 12, marginBottom: 5, flexDirection: 'row', alignItems: 'center', backgroundColor: 'green', backgroundColor: 'white', marginHorizontal: 18, paddingLeft: 20}}>
                        {item.vectoricon}

                        <View style={{ width: '17%', height: '300%', backgroundColor: '#228b22', position: 'absolute', zIndex: -1, transform: [{ rotate: '25deg' }], marginLeft: -15 }}>

                        </View>

                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ color: '#808080', fontSize: 13 }}>
                                {item.Text1}
                            </Text>

                            <Text style={{ fontSize: 13, color: 'black', marginTop: 5 }}>
                                {item.Text2}
                            </Text>
                        </View>

                        <View style={{ marginLeft: '90%', zIndex: -1, position: 'absolute' }}>
                            <Entypo
                                name={item.icon2}
                                size={25}
                                color={item.color2}
                            />



                        </View>



                    </View>
                )
            }}
        />

    )
}

export default GeneralItem