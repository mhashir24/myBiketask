import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View, 
    Image,
    Text,
    FlatList,
    TouchableOpacity

}           
from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import bike1 from '../../assets/bike1.jpg';
import bike2 from '../../assets/bike2.jpg';
import bike3 from '../../assets/bike3.jpg';
import julia from '../../assets/julia.jpg';
import jenny from '../../assets/jenny.jpg';
import alicia from '../../assets/alicia.jpg';

const bikedata = [
  {
    id:'0',
    img: bike1,
    text1: 'Yamaha YZF-R1M',
    text2: '31 May 2021',
    text3: 'By Huggy',
    text4: 'Annonce',
    dpimg: julia
  },
  {
    id:'1',
    img: bike2,
    text1: 'Yamaha YBR 120',
    text2: '2 Oct 2021',
    text3: 'By Jenny',
    text4: 'Macbook',
    dpimg: jenny
  },
  {
    id:'2',
    img: bike3,
    text1: 'Yamaha YBR 200',
    text2: '4 Feb 2021',
    text3: 'By Jennifer',
    text4: 'Motorbike',
    dpimg: alicia
  }
]


const HomePage = () => {
  const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor:'#f8f8ff', marginBottom:120}}>
          <View style={{margin:20, flexDirection:'row', justifyContent:'space-between'}}>

            <View style={{borderRadius:200,  width:40, height:40, 
              backgroundColor:'#1e90ff', margin:10, flexDirection:'row'}}>
          <MaterialCommunityIcons
            name = {'shopping'}
            size={20}
            color={'white'}
            style={{padding:9}}
            />
            <View style={{width:100, height:40, marginLeft:10}}>
              <Text style={{fontWeight:'bold'}}>
                {'Mon'}
              </Text>

              <Text style={{fontWeight:'bold'}}>
                {'Annouces'}
              </Text>
              </View>
            </View>

            <View style={{borderRadius:200, borderWidth:1, width:40, height:40 ,backgroundColor:'white', 
            margin:10, borderColor:'#dcdcdc'}}>
          <MaterialIcons
            name = {'filter-alt'}
            size={20}
            color={'black'}
            style={{padding:9}}
            />
            </View>
          </View>

          <View style={{marginTop:-15}}>

              <FlatList
              data = {bikedata}
              keyExtractor = {(item) => item.id}
              renderItem={({item}) =>{
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { data: item })}>

                  <View style={{marginHorizontal:30, borderRadius:15, backgroundColor:'white', marginTop:10}}>
                  <Image
                  source={item.img}
                  style={{height:350, width:297, borderTopLeftRadius:15, borderTopRightRadius:15}}
                  />

                  <View style={{zIndex:1, position:'absolute', left:200, top:15, 
                  borderRadius:20, padding:4, paddingHorizontal:15, backgroundColor:'#00B2FF', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:12}}>
                      {item.text4}
                    </Text>
                  </View>
      
                  <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
                  <Text style={{fontWeight:'bold'}}>
                    {item.text1}
                  </Text>
                  <Text style={{color:'#808080', fontSize:10}}>
                    {item.text2}
                  </Text>
                  </View>
      
                  <View style={{marginHorizontal:20, flexDirection:'row' , alignItems:'center', marginTop:-15, marginBottom:5}}> 
                  <Image
                  source={item.dpimg}
                  style={{width:20, height:20, borderRadius:10, marginRight:5, marginBottom:10}}
                  />
                    <Text style={{color:'#808080', fontSize:13, marginBottom:10}}>
                      {item.text3}
                    </Text>
                  </View>
                  
                </View>
                </TouchableOpacity>
                )
              }}
              />


</View>





        </View>
    );
};

export default HomePage
