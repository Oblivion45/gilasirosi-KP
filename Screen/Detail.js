import React from "react";
import { View, Image, Text, TouchableOpacity,TouchableHighlight } from "react-native";
import Footer from "../component/footer";
import {useNavigation} from '@react-navigation/native'
export default function Detail(){
    const navigation = useNavigation()
    return (
        <View style={{backgroundColor:'#f6f6f6'}}>
            <View>
                <Image
                    source={require('../assets/kerajinan.jpg')}
                    style={{width:360,height:320,alignSelf:'center'}}
                />
                <TouchableOpacity onPressIn={() => {navigation.goBack()}}>
                    <Image
                        source={require('../assets/arrow.png')}
                        style={{width:32,height:32,marginTop:-280,marginLeft:20}}
                    />
                </TouchableOpacity>
                <View style={{borderRadius:40,marginTop:-30,backgroundColor:"#ffffff",alignSelf:'center',width:360,height:1000,flexDirection:'row'}}>
                    <View style={{marginLeft:30,marginTop:20}}>
                        <Text style={{fontSize:24,fontWeight:'bold'}}>Bros Dagu</Text>
                        <Text style={{paddingTop:10,fontSize:16}}>Bros Dagu Safitri handmade</Text>
                        <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold'}}>Rp.5.000,00-</Text>
                        <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold'}}>Kecamatan</Text>
                        <Text style={{paddingTop:10,fontSize:16}}>Rawaheng</Text>
                        <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold'}}>Nama UMKM</Text>
                        <Text style={{paddingTop:10,fontSize:16}}>Samiati</Text>
                        <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold'}}>Alamat</Text>
                        <Text style={{paddingTop:10,fontSize:14}}>Gembrong RT 03 RW 01 rawaheng</Text>
                        <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold'}}>Telefon / No Hp</Text>
                        <Text style={{paddingTop:10,fontSize:16}}>081272819023</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{backgroundColor:'#000072',height:30,width:80,borderRadius:10,marginTop:25,marginLeft:10}}>
                            <Text style={{color:'#ffffff',alignSelf:'center',marginTop:5}}>Kerajinan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}