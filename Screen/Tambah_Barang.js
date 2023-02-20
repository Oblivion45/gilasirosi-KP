import React from "react";
import { View,Image,Text,TextInput, TouchableOpacity, ScrollView } from "react-native";


export default function Tambah_Barang(){
    return(
        <View style={{backgroundColor:'#f6f6f6',borderRadius:10}}>
            <ScrollView>
                <View style={{backgroundColor:'#ffffff',marginHorizontal:30,marginTop:90}}>
                    <Text style={{marginTop:40,fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Tambah Barang</Text>
                    <Image
                        source={require('../assets/image-placeholder.png')}
                        style={{width:200,height:200,alignSelf:'center',marginTop:20}}
                    />
                    <TouchableOpacity>
                        <View style={{backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center'}}>
                            <Text style={{fontSize:20,color:'#ffffff',alignSelf:'center',fontWeight:'bold'}}>Tambah Gambar</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:20,marginTop:30}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Nama Barang</Text>
                        <TextInput placeholder="Nama" style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3}}></TextInput>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Kategori</Text>
                        <TextInput placeholder="Dropdown" style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3}}></TextInput>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Deskripsi</Text>
                        <TextInput placeholder="Deskripsi" style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3,paddingTop:5}}></TextInput>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Harga</Text>
                        <TextInput placeholder="Harga" style={{borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3}}></TextInput>
                    </View>
                    
                    <TouchableOpacity>
                        <View style={{backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center',marginBottom:40}}>
                            <Text style={{fontSize:20,color:'#ffffff',alignSelf:'center',fontWeight:'bold'}}>Tambah Barang</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}