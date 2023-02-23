import React from "react";
import { StyleSheet,View,Image,Text,TextInput, TouchableOpacity, ScrollView } from "react-native";
import {useNavigation} from '@react-navigation/native'


export default function Tambah_Barang(){
    const navigation = useNavigation()
    return(
        <View style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <Image
                            source={require('../assets/arrow.png')}
                            style={styles.backbutton}
                        />
                    </TouchableOpacity>
                    <Text style={styles.tambahtitle}>Tambah Barang</Text>
                    <Image
                        source={require('../assets/image-placeholder.png')}
                        style={styles.imageplaceholder}
                    />
                    <TouchableOpacity>
                        <View style={styles.tambahgambarbutton}>
                            <Text style={styles.tambahgambarbuttontext}>Tambah Gambar</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.formcontainer}>
                        <Text style={styles.formdatatitle}>Nama Barang</Text>
                        <TextInput placeholder="Nama" style={styles.datainput}></TextInput>
                        <Text style={styles.formdatatitle}>Kategori</Text>
                        <TextInput placeholder="Dropdown" style={styles.datainput}></TextInput>
                        <Text style={styles.formdatatitle}>Deskripsi</Text>
                        <TextInput placeholder="Deskripsi" style={styles.datainput}></TextInput>
                        <Text style={styles.formdatatitle}>Harga</Text>
                        <TextInput placeholder="Harga" style={styles.datainput}></TextInput>
                    </View>
                    
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.tambahbarangbutton}>
                            <Text style={styles.tambahbarangbuttontext}>Tambah Barang</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#f6f6f6',borderRadius:10,marginTop:60,marginHorizontal:30
    },
    container:{
        backgroundColor:'#ffffff',marginTop:-20
    },
    backbutton:{
        width:32,height:32,marginTop:40,marginLeft:20
    },
    tambahtitle:{
        marginTop:20,fontSize:20,fontWeight:'bold',alignSelf:'center'
    },
    imageplaceholder:{
        width:200,height:200,alignSelf:'center',marginTop:20
    },
    tambahgambarbutton:{
        backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center'
    },
    tambahgambarbuttontext:{
        fontSize:20,color:'#ffffff',alignSelf:'center',fontWeight:'bold'
    },
    formcontainer:{
        marginLeft:20,marginTop:30
    },
    formdatatitle:{
        fontSize:16,fontWeight:'bold'
    },
    datainput:{
        borderBottomWidth:1,marginRight:20,marginBottom:20,borderColor:'#e3e3e3',borderRadius:3
    },
    tambahbarangbutton:{
        backgroundColor:'#000072',padding:10,borderRadius:10,marginTop:20,width:200,alignSelf:'center',marginBottom:40
    },tambahbarangbuttontext:{
        fontSize:20,color:'#ffffff',alignSelf:'center',fontWeight:'bold'
    }
})