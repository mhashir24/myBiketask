import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';import {
    View, 
    Image,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity

}           
from "react-native";

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import motorbike1 from '../../assets/motorbike1.jpg';
import motorbike2 from '../../assets/motorbike2.jpg';
import motorbike3 from '../../assets/motorbike3.jpg';
import motorbike4 from '../../assets/motorbike4.jpg';
import julia from '../../assets/julia.jpg';


const ProductDetail = ({ route }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (route && route.params) {
            const { params } = route
            setData(params.data)
        }
    }, [route])
    const navigation = useNavigation()
    return (

        <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{flex:0.6}}>
            <ImageBackground
            
            source={data?.img}
            style={{
              zIndex: 1, opacity: 20,
              width: '100%',
              height: '100%'
            }}
            imageStyle={{
              resizeMode: 'cover'
            }}
          >
<View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>

<TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
<View style={{borderRadius:50, borderWidth:1, padding:5}}>
<AntDesign
style={{}}
name = {'arrowleft'}
size={15}
color={'white'}
/>
</View>
</TouchableOpacity>

<Text style={{color:'white', fontWeight:'bold', fontSize:18}}>
    {'Product Detail'}
</Text>

<View style={{borderRadius:50, borderWidth:1, padding:5}}>
<SimpleLineIcons
style={{}}
name = {'options'}
size={15}
color={'white'}
/>
</View>

</View>

<View style={{ marginTop:230, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
<Image
source={motorbike1}
style={{width:60, height:50,marginHorizontal:10, borderWidth:1, borderColor:'white'}}
/>

<Image
source={motorbike2}
style={{width:60, height:50,marginHorizontal:10, borderWidth:1, borderColor:'white'}}
/>

<Image
source={motorbike3}
style={{width:60, height:50,marginHorizontal:10, borderWidth:1, borderColor:'white'}}
/>

<Image
source={motorbike4}
style={{width:60, height:50,marginHorizontal:10, borderWidth:1, borderColor:'white'}}
/>
</View>
        </ImageBackground>


        <View style={{flexDirection:'row', justifyContent:'space-between', margin:20, marginHorizontal:30}}>
                  <Text style={{fontWeight:'bold'}}>
                    {data?.text1}
                  </Text>
                  <Text style={{color:'#808080', fontSize:10}}>
                    {data?.text2}
                  </Text>
                  </View>
      
                  <View style={{borderBottomWidth:1.5,borderBottomColor:'#dcdcdc' ,marginHorizontal:30, flexDirection:'row' , alignItems:'center', marginTop:-15, marginBottom:5}}> 
                  <Image
                  source={data?.dpimg}
                  style={{width:20, height:20, borderRadius:10, marginRight:8, marginBottom:10}}
                  />
                    <Text style={{color:'#808080', fontSize:13, marginBottom:10}}>
                      {data?.text3}
                    </Text>
                  </View>

                  <View style={{marginHorizontal:30, marginTop:10}}>
                      <Text style={{color:'#808080', fontSize:13, fontWeight:'bold'}}>
                          {'Description'}
                      </Text>

                      <Text style={{fontSize:12, marginTop:5}}>
                          {'Senectus arcu morbi lorem blandit trstique id in turpis'}
                      </Text>

                      <Text style={{fontSize:12}}>
                          {'cursus sed ultrices purus tellus velt lorem laoreet, arcu'}
                      </Text>

                      <Text style={{fontSize:12}}>
                          {'morbi lorem blandit tristique id in turpis cursus.'}
                      </Text>
                  </View>

                <TouchableOpacity>
                <View style={{marginHorizontal:30, padding:15, justifyContent:'center', 
                alignItems:'center', borderRadius:10, marginTop:15, backgroundColor:'#00B2FF', flexDirection:'row'}}>
                    <Ionicons
                    style={{}}
                    name = {'chatbubble-ellipses'}
                    size={15}
                    color={'white'}
                    />
                    
                    <Text style={{color:'white', marginLeft:8, fontWeight:'bold'}}>
                        {'Send Message'}
                    </Text>
                </View>
                </TouchableOpacity>





              </View>
              
              </View>

    );
};

export default ProductDetail
