import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity


}
    from "react-native";
import { HP, WP } from '../../src/constant';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import img from '../../assets/eliza.jpg';
import FList from '../../src/component/FList';
import GeneralItem from '../../src/component/GeneralItem';




const Settings = () => {


    return (

        <View style={{ flex: 1, backgroundColor:'white' }}>

            <View style={{ position: 'relative'}}>
                <View style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 23, alignItems: 'center' }}>
                    <FontAwesome
                        style={{ borderRadius: 5,  borderColor: 'green', padding: 10, alignItems: 'center', backgroundColor: 'white', marginRight: 10 }}
                        name={'arrow-left'}
                        size={18}
                        color={'green'}
                    />

                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
                        {'Settings'}
                    </Text>
                </View>

                <View style={{ paddingHorizontal: '6%', flexDirection: 'row' }}>
                    <Image
                        style={{ width: 100, height: 80, borderRadius: 10 }}
                        source={img}
                    />

                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                            {'Elizabeth Olsen'}
                        </Text>

                        <Text style={{ fontSize: 13, color: 'white', marginTop: 10 }}>
                            {'Iraq, Baghdad'}
                        </Text>
                    </View>
                </View>

                <View style={{ marginHorizontal: 15 }}>
                    <FList />
                </View>

            <View style={{height:'99%', width:'115%',zIndex: -1,position: 'absolute',backgroundColor:'#228b22',transform: [{  rotate:'-7deg'}], marginHorizontal:-30, top:-30}} />

            </View>

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ marginLeft: 20, paddingVertical: 8 }}>
                    <Text style={{ fontSize: 16, color: '#808080' }}>
                        {'GENERAL'}
                    </Text>
                </View>

                <View style={{ marginBottom: 65 }}>
                    <GeneralItem />
                </View>

                <View style={{ flexDirection: 'row', marginTop: -65, justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                    <Text style={{ color: '#808080', fontSize:15 }}>
                        {'Contact Us'}
                    </Text>

                    <Text style={{ color: '#808080', fontSize:15  }}>
                        {'Sign Out'}
                    </Text>
                </View>



            </View>


        </View>









    );
}

export default Settings