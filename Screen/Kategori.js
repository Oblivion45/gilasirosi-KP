import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import Footer from '../component/footer';

export default function Kategori(){
    return (
        <View>
            <View style={{marginLeft:30,backgroundColor:'#f6f6f6'}}>
                <ScrollView style={{paddingTop:80,marginBottom:80}}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{height:50,width:200,marginBottom:30,alignSelf:'center'}}
                    />
                    <Text style={{fontSize:24,fontWeight:'bold'}}>Kategori</Text>                    
                    <TouchableOpacity>
                        <View style={{paddingVertical:10}}>
                            <Image
                                source={require('../assets/category_kerajinan.png')}
                                style={{width:300,height:135}}
                            />
                            <Text style={{marginTop:-40,marginLeft:-20,marginBottom:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold',fontSize:20}}>208 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{paddingVertical:10}}>
                            <Image
                                source={require('../assets/category_makanan.png')}
                                style={{width:300,height:135}}
                            />
                            <Text style={{marginTop:-40,marginLeft:-20,marginBottom:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold',fontSize:20}}>400 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{paddingVertical:10}}>
                            <Image
                                source={require('../assets/category_minuman.png')}
                                style={{width:300,height:135}}
                            />
                            <Text style={{marginTop:-40,marginLeft:-20,marginBottom:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold',fontSize:20}}>12 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{paddingVertical:10}}>
                            <Image
                                source={require('../assets/category_rt.png')}
                                style={{width:300,height:135}}
                            />
                            <Text style={{marginTop:-40,marginLeft:-20,marginBottom:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold',fontSize:20}}>1271 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{paddingVertical:10,paddingBottom:100}}>
                            <Image
                                source={require('../assets/category_jasa.png')}
                                style={{width:300,height:135}}
                            />
                            <Text style={{marginTop:-40,marginLeft:-20,marginBottom:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold',fontSize:20}}>9 Produk</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Footer></Footer>
        </View>
        
    )
}