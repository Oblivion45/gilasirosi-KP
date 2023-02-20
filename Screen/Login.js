import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Login(){
    return (
        <View style={{marginHorizontal:30}}>
            <View style={{backgroundColor:'#ffffff',marginTop:60}}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{height:50,width:200,marginVertical:30,alignSelf:'center',marginBottom:120}}
                />
                <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Login Sebagai UMKM</Text>
                <TextInput
                    placeholder="Email"
                    style={{borderRadius:10,borderWidth:1,padding:10,borderColor:'#d6d6d6',width:250,alignSelf:'center',marginVertical:20}}
                ></TextInput>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{borderRadius:10,borderWidth:1,padding:10,borderColor:'#d6d6d6',width:250,alignSelf:'center',marginBottom:20}}
                ></TextInput>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#000072',width:250,padding:10,borderRadius:10,alignSelf:'center',marginTop:10}}>
                        <Text style={{fontSize:20,color:"#ffffff",fontWeight:'bold',alignSelf:'center'}}>Login</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:16,alignSelf:'center',marginTop:20,color:'#828282'}}>Belum Memiliki Akun?</Text>
                <Text style={{fontSize:14,marginTop:20,alignSelf:'center',justifyContent:'center',textAlign:'center',fontWeight:'bold'}}>Anda Bisa Mendaftar Akun UMKM anda di Dinas Tenaga Kerja, Koperasi dan UKM Banyumas</Text>
                <Text style={{fontSize:16,fontWeight:'bold',alignSelf:'center',marginTop:40,marginBottom:40}}>dinnakerkopumkm@gmail.com</Text>
            </View>
        </View>
    )
}