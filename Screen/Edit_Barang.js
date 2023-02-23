import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Edit_Barang(){
    const navigation = useNavigation()
    return (
        <View style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                <TouchableOpacity onPressIn={() => {navigation.goBack()}}>
                    <Image
                        source={require('../assets/arrow.png')}
                        style={styles.backbutton}
                    />
                </TouchableOpacity>
                    <Text style={styles.edittitle}>Edit Barang</Text>
                    <Image
                        source={require('../assets/minuman.jpeg')}
                        style={styles.produkimage}
                    />
                    <TouchableOpacity>
                        <View style={styles.editgambarbutton}>
                            <Text style={styles.editgambarbuttontext}>Edit Gambar</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.datacontainer}>
                        <Text style={styles.datatitle}>Nama Barang</Text>
                        <TextInput value='Es Rindu Rasa' style={styles.data}></TextInput>
                        <Text style={styles.datatitle}>Kategori</Text>
                        <TextInput value='Minunan' style={styles.data}></TextInput>
                        <Text style={styles.datatitle}>Deskripsi</Text>
                        <TextInput value='Minuman menyegarkan' style={styles.data}></TextInput>
                        <Text style={styles.datatitle}>Harga</Text>
                        <TextInput value='7.000' style={styles.data}></TextInput>
                    </View>
                    
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <View style={styles.savebutton}>
                            <Text style={styles.savebuttontext}>Simpan Perubahan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#f6f6f6'
    },
    container:{
        backgroundColor:'#ffffff',marginHorizontal:30,marginTop:60,borderRadius:10
    },
    edittitle:{
        marginTop:40,fontSize:20,fontWeight:'bold',alignSelf:'center'
    },
    produkimage:{
        width:200,height:200,alignSelf:'center',marginTop:20
    },
    editgambarbutton:{
        backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center'
    },
    editgambarbuttontext:{
        fontSize:16,color:'#ffffff',alignSelf:'center',fontWeight:'bold'
    },
    datacontainer:{
        marginLeft:20,marginTop:30
    },
    datatitle:{
        fontSize:16,fontWeight:'bold'
    },
    data:{
        borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3
    },
    savebutton:{
        backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center',marginBottom:40
    },
    savebuttontext:{
        fontSize:16,color:'#ffffff',alignSelf:'center',fontWeight:'bold'
    },
    backbutton:{
        width:32,height:32,marginTop:20,marginLeft:20
    },
    
})