import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import Footer from "../component/footer";
import {useNavigation} from '@react-navigation/native'

export default function Profil_Not_Login () {
    const navigation = useNavigation()
    return (
        <View style={{marginHorizontal:30,backgroundColor:'#f6f6f6',flex:1}}>
            <View style={{backgroundColor:'#ffffff',width:300,height:100,marginTop:110,borderRadius:20}}>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <Image
                        source={require('../assets/male.png')}
                        style={{width:60,height:60,marginLeft:20,borderRadius:10}}
                    />
                    <View style={{flexDirection:'column',marginLeft:20,marginTop:10,width:200}}>
                        <Text style={{fontSize:16,fontWeight:'bold',flexWrap:'wrap',flexShrink:1,justifyContent:'center'}}>Kamu belum melakukan Login</Text>
                    </View>
                </View>
                <View style={{marginTop:100,backgroundColor:'#ffffff',borderRadius:20,height:200}}>
                    <Text style={{alignSelf:'center',marginTop:20,fontWeight:'bold',fontSize:16}}>Ingin Login Sebagai UMKM?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={{backgroundColor:'#000072',borderRadius:10,height:50,width:200,marginTop:30,alignSelf:'center'}}>
                            <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:15}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{bottom:-240}}>
                    <Footer/>
                </View>
            </View>
        </View>
    )
}