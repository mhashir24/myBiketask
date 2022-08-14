import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    {
        id: "0",
        title: "Settings",
        icon: 'setting',
        iconcolor: 'green'
    },
    {
        id: "1",
        title: "Payments",
        icon: 'carryout',
        iconcolor: '#808080'
    },
    {
        id: "2",
        title: "Communication",
        icon: 'bells',
        iconcolor: '#808080'
    },


]


const FList = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 5, position: 'relative', overflow: 'hidden' }}>

                        <View style={{ borderRadius: 10, overflow:'hidden',borderBottomWidth: 3, borderRightWidth:3, borderBottomColor: '#e6e6fa', borderColor: '#e6e6fa', paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', paddingHorizontal:10 }}>

                        <View style={{width:'35%', height:'300%', backgroundColor:'#9acd32', position:'absolute', zIndex:-1, transform: [{rotate: '25deg'}], marginLeft:-10}}>

                        </View>
                            <AntDesign
                                style={{alignItems: 'center', justifyContent: 'center', padding:3,borderRadius:20,  backgroundColor:'white'}}
                                name={item.icon}
                                size={22}
                                color={item.iconcolor}
                            />
                            <Text style={{ color: item.iconcolor, paddingLeft: 5 }}>
                                {item.title}
                            </Text>
                        </View>




                    </View>
                )
            }}
        />
    )
}

export default FList