import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Detail_Profil(){
    return (
        <View style={{marginHorizontal:20,marginTop:100}}>
            <TouchableOpacity>
                <Image
                    source={require('../assets/arrow.png')}
                    style={{width:32,height:32,marginTop:-40,marginBottom:20}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Edit Profil</Text>
            <Image
                source={require('../assets/profile.jpg')}
                style={{width:80,height:80,alignSelf:'center',marginTop:30,borderRadius:10,marginBottom:30}}
            />
            <View style={{backgroundColor:'#ffffff',borderRadius:20,paddingHorizontal:5,paddingTop:20,height:300}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginVertical:10,color:'#90A1DB'}}>Nama UMKM</Text>
                    <TextInput
                        value="Prakarya Rizqi"
                        style={{borderBottomWidth:1,borderColor:'#90A1DB',width:180,marginLeft:30,fontSize:18,borderRadius:5,paddingLeft:10}}
                    ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginVertical:10,color:'#90A1DB'}}>Email</Text>
                    <TextInput
                        value="prakaryarizqi@gmail.com"
                        style={{borderBottomWidth:1,borderColor:'#90A1DB',width:180,marginLeft:85,fontSize:14,borderRadius:5,paddingLeft:10}}
                    ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginVertical:10,color:'#90A1DB'}}>Kecamatan</Text>
                    <TextInput
                        value="Lumbir"
                        style={{borderBottomWidth:1,borderColor:'#90A1DB',width:180,marginLeft:45,fontSize:14,borderRadius:5,paddingLeft:10}}
                    ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginVertical:10,color:'#90A1DB'}}>Alamat UMKM</Text>
                    <TextInput
                        value="Jl. Secang 2 No 100 "
                        style={{borderBottomWidth:1,borderColor:'#90A1DB',width:180,marginLeft:22,fontSize:12,borderRadius:5,paddingLeft:10}}
                    ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginVertical:10,color:'#90A1DB'}}>Telp UMKM</Text>
                    <TextInput
                        value="081201201923"
                        style={{borderBottomWidth:1,borderColor:'#90A1DB',width:180,marginLeft:42,fontSize:14,borderRadius:5,paddingLeft:10}}
                    ></TextInput>
                </View>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#000072',width:200,height:50,borderRadius:20,alignSelf:'center',marginTop:150}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:'#ffffff',alignSelf:'center',marginTop:10}}>Ubah dan Simpan</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}