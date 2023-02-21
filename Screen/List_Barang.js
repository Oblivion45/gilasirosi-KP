import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TouchableHighlight } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function List_Barang(){
    const navigation = useNavigation()
    return(
        <View style={{marginTop:100,marginHorizontal:20}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image
                    source={require('../assets/arrow.png')}
                    style={{width:32,height:32,marginTop:-40,marginBottom:20}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',marginBottom:40}}>Barang Prakarya Rizqi</Text>
            <ScrollView style={{marginBottom:170}}>
                <View style={{marginBottom:10,backgroundColor:'#ffffff',width:320,alignContent:'center',borderRadius:10,padding:20,flexDirection:'row'}}>
                    <View>
                        <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10}}>
                            <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Makanan</Text>
                        </View>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Kripik Jahe</Text>
                        <Text style={{fontSize:14}}>Kripik jahe enak sekali</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Rp.15.000,-</Text>
                    </View>
                    <View style={{marginTop:20,marginLeft:20}}>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'red',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Hapus</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:10,backgroundColor:'#ffffff',width:320,alignContent:'center',borderRadius:10,padding:20,flexDirection:'row'}}>
                    <View>
                        <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10}}>
                            <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Minuman</Text>
                        </View>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Es Buah Naga</Text>
                        <Text style={{fontSize:14}}>Dari buah naga asli.....</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Rp.5.000,-</Text>
                    </View>
                    <View style={{marginTop:20,marginLeft:20}}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Edit_Barang')}}>
                            <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'red',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Hapus</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:10,backgroundColor:'#ffffff',width:320,alignContent:'center',borderRadius:10,padding:20,flexDirection:'row'}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10}}>
                            <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Kerajinan</Text>
                        </View>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Bros Dagu</Text>
                        <Text style={{fontSize:14}}>Menggunakan bahan..</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Rp.25.000,-</Text>
                    </View>
                    <View style={{marginTop:20,marginLeft:20}}>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'red',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Hapus</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:10,backgroundColor:'#ffffff',width:320,alignContent:'center',borderRadius:10,padding:20,flexDirection:'row'}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10}}>
                            <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Kerajinan</Text>
                        </View>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Bros Dagu</Text>
                        <Text style={{fontSize:14}}>Menggunakan bahan..</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Rp.25.000,-</Text>
                    </View>
                    <View style={{marginTop:20,marginLeft:20}}>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{backgroundColor:'red',borderRadius:10,height:30,width:80,marginBottom:10,marginLeft:45}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5}}>Hapus</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:0}}></View>
            </ScrollView>
            <TouchableOpacity onPressIn={() => {navigation.navigate('Tambah_Barang')}}>
                <View style={{backgroundColor:'#000072',borderRadius:10,height:50,width:200,marginBottom:10,marginLeft:45,position:'absolute',bottom:90,alignSelf:'center'}}>
                    <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:15}}>+   Tambah Barang</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}