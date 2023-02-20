import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';

export default function Edit_Barang(){
    return (
        <View style={{backgroundColor:'#f6f6f6'}}>
            <ScrollView>
                <View style={{backgroundColor:'#ffffff',marginHorizontal:30,marginTop:90,borderRadius:10}}>
                    <Text style={{marginTop:40,fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Edit Barang</Text>
                    <Image
                        source={require('../assets/minuman.jpeg')}
                        style={{width:200,height:200,alignSelf:'center',marginTop:20}}
                    />
                    <TouchableOpacity>
                        <View style={{backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center'}}>
                            <Text style={{fontSize:16,color:'#ffffff',alignSelf:'center',fontWeight:'bold'}}>Edit Gambar</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:20,marginTop:30}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Nama Barang</Text>
                        <TextInput value='Es Rindu Rasa' style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3}}></TextInput>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Kategori</Text>
                        <TextInput value='Minunan' style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3}}></TextInput>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Deskripsi</Text>
                        <TextInput value='Minuman menyegarkan' style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3,paddingTop:5}}></TextInput>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Harga</Text>
                        <TextInput value='7.000' style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3}}></TextInput>
                    </View>
                    
                    <TouchableOpacity>
                        <View style={{backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center',marginBottom:40}}>
                            <Text style={{fontSize:16,color:'#ffffff',alignSelf:'center',fontWeight:'bold'}}>Simpan Perubahan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}