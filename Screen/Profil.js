import React from "react";
import { View, Image,Text,TouchableOpacity } from "react-native";
import Footer from "../component/footer";
import {useNavigation} from '@react-navigation/native'

export default function Profil () {
    const navigation = useNavigation()
    return (
        <View style={{marginHorizontal:30,backgroundColor:'#f6f6f6',flex:1}}>
            <View style={{backgroundColor:'#ffffff',width:300,height:100,marginTop:110,borderRadius:20}}>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <Image
                        source={require('../assets/profile.jpg')}
                        style={{width:60,height:60,marginLeft:20,borderRadius:10}}
                    />
                    <View style={{flexDirection:'column',marginLeft:20,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Prakarya Rizqi</Text>
                        <Text style={{color:'#a2a2a2'}}>prakaryarizqi@gmail.com</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#ffffff',width:300,height:300,marginTop:80,borderRadius:20}}>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../assets/profile-user2.png')}
                            style={{width:50,height:50,borderRadius:10,marginTop:20,marginLeft:20}}
                        />
                        <Text style={{marginTop:32.5,marginLeft:15,fontWeight:'bold',fontSize:16}}>Detail Profil</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail_Profil')}>
                            <Image
                                source={require('../assets/right-arrow.png')}
                                style={{width:20,height:20,borderRadius:10,marginTop:32.5,marginLeft:85}}
                            />
                        </TouchableOpacity>    
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../assets/shopping-bag.png')}
                            style={{width:50,height:50,borderRadius:10,marginTop:20,marginLeft:20}}
                        />
                        <Text style={{marginTop:32.5,marginLeft:15,fontWeight:'bold',fontSize:16}}>Barang Saya</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('List_Barang')}>
                            <Image
                                source={require('../assets/right-arrow.png')}
                                style={{width:20,height:20,borderRadius:10,marginTop:32.5,marginLeft:80}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../assets/information.png')}
                            style={{width:50,height:50,borderRadius:10,marginTop:20,marginLeft:20}}
                        />
                        <Text style={{marginTop:32.5,marginLeft:15,fontWeight:'bold',fontSize:16}}>Bantuan</Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/right-arrow.png')}
                                style={{width:20,height:20,borderRadius:10,marginTop:32.5,marginLeft:110}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../assets/logout.png')}
                            style={{width:50,height:50,borderRadius:10,marginTop:20,marginLeft:20}}
                        />
                        <Text style={{marginTop:32.5,marginLeft:15,fontWeight:'bold',fontSize:16}}>Keluar dari Akun</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Profil_Not_Login')}>
                            <Image
                                source={require('../assets/right-arrow.png')}
                                style={{width:20,height:20,borderRadius:10,marginTop:32.5,marginLeft:50}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{bottom:-160}}>
                    <Footer/>
                </View>
            </View>
        </View>
    )
}