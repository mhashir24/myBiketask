import 'react-native-gesture-handler';
import React, { useState } from "react";

import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    Button

}
    from "react-native";

import { HP, WP } from '../../src/constant';

import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BottomSheetComponent from '../../src/component/BottomSheet';

const arr = ["asd", "sad", "sadasd"]
const obj = {
    name: 'Hashir'
}
const profileGB = [
    {
        id: '0',
        Text1: 'Name',
        Text2: 'Maheen Adamjee'
    },

    {
        id: '1',
        Text1: 'Phone',
        Text2: '+92333 3424323'
    },

    {
        id: '2',
        Text1: 'Email',
        Text2: 'maheen@gmail.com'
    }
]


const ProfilePage = () => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("show address")

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);

        setTimeout(() => {
            setTitle("show City name")
        }, 3000);
    };

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', paddingVertical: HP('2'), alignItems: 'center', paddingHorizontal: WP('4') }}>
                <Feather
                    name={'arrow-left'}
                    color={'#778899'}
                    size={25}
                />

                <Text style={{ fontWeight: 'bold', fontSize: 18, paddingHorizontal: WP('3') }}>
                    {'My Profile'}
                </Text>
            </View>

            <View style={{ flexDirection: 'row', paddingVertical: HP('2'), alignItems: 'center', paddingHorizontal: WP('8'), justifyContent: 'space-between' }}>
                <Text style={{ color: '#778899', fontWeight: 'bold' }}>
                    {'PROFILE INFORMATION'}
                </Text>

                <Text style={{ color: '#12ABBB', fontWeight: 'bold' }}>
                    {'Edit'}
                </Text>
            </View>


            <View>
                <FlatList
                    data={profileGB}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ paddingVertical: HP('2'), paddingHorizontal: WP('8') }}>
                                <Text style={{ color: '#778899' }}>
                                    {item.Text1}
                                </Text>

                                <Text style={{ color: 'black', fontWeight: 'bold', paddingTop: 5 }}>
                                    {item.Text2}
                                </Text>
                            </View>
                        )
                    }}

                />
            </View>

            <View style={{ paddingVertical: HP('2'), paddingHorizontal: WP('8') }}>
                <Text style={{ color: '#778899' }}>
                    {'Postal Address'}
                </Text>
                
                <TouchableOpacity onPress={toggleBottomNavigationView}>
                <Text style={{ color: '#12ABBB', fontWeight: 'bold' }}>
                    {'Add Address'}
                </Text>
                </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 4, borderColor: '#F9F9F8', marginTop: HP('2'), flexDirection: 'row', paddingVertical: HP('3'), paddingHorizontal: WP('8') }}>
                <SimpleLineIcons
                    name={'lock'}
                    size={25}
                    color={'#778899'}
                />

                <Text style={{ fontSize: 18, color: '#778899', paddingLeft: WP('5') }}>
                    {'Change Password'}
                </Text>

            </View>


            <View>
                <BottomSheetComponent name={'Nabeel'} title={title} show={visible} onHandleClose={toggleBottomNavigationView} />

            </View>













        </View>

    );
}

export default ProfilePage