import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Footer from '../component/footer';

export default function Home() {
    const navigation = useNavigation()
  return (
    <View style={styles.background}>
        <ScrollView>
            <View style={styles.container}>
                <View style={{paddingTop:80}}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={{fontSize:24}}>Selamat Datang di</Text>
                    <Text style={{fontSize:28,color:'#000072',fontWeight:'bold'}}>Gilasirosi</Text>
                    <Text style={{fontSize:18}}>Digitalisasi Integrasi & Kolaborasi</Text>
                    <Text style={{fontSize:20,color:'#000072',fontWeight:'bold'}}>UMKM</Text>
                </View>
                <View style={styles.searchflex}>
                    <TextInput
                        placeholder='Cari...'
                        style={styles.searchinput}
                    ></TextInput>
                    <TouchableOpacity color='#ffffff' onPress={() => {navigation.navigate('Kategori')}}>
                        <View style={styles.searchbutton}>
                            <Image
                                source={require('../assets/search.png')}
                                style={{width:24,height:24}}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.produk}>Produk</Text>
                <View style={styles.cardflex}>
                    <TouchableOpacity color='#ffffff'>
                        <View style={styles.cardcontainer}>
                            <Image
                                source={require('../assets/landingpage.jpeg')}
                                style={styles.produkimage}
                            />
                            <View style={styles.kategori}>
                                <Text style={styles.kategoritext}>Makanan</Text>
                            </View>
                            <Text style={styles.produktitleharga}>Stick Jahe</Text>
                            <Text style={styles.description}>Stick Jahe Makanan Ringan</Text>
                            <Text style={styles.produktitleharga}>Rp.16.000,00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity color='#ffffff'>
                        <View style={styles.cardcontainer}>
                            <Image
                                source={require('../assets/rumahtangga.jpg')}
                                style={styles.produkimage}
                            />
                            <View style={styles.kategori}>
                                <Text style={styles.kategoritext}>Rumah Tangga</Text>
                            </View>
                            <Text style={styles.produktitleharga}>Wood Plate</Text>
                            <Text style={styles.description}>Piring Kayu Besar</Text>
                            <Text style={styles.produktitleharga}>Rp.32.000,00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardflex}>
                    <TouchableOpacity color='#ffffff'>
                        <View style={styles.cardcontainer}>
                            <Image
                                source={require('../assets/jasa.jpg')}
                                style={styles.produkimage}
                            />
                            <View style={styles.kategori}>
                                <Text style={styles.kategoritext}>Jasa</Text>
                            </View>
                            <Text style={styles.produktitleharga}>Fotocopy</Text>
                            <Text style={styles.description}>Jasa Fotocopy / Print</Text>
                            <Text style={styles.produktitleharga}>Rp.250,00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Detail')}}>
                        <View style={styles.cardcontainer}>
                            <Image
                                source={require('../assets/kerajinan.jpg')}
                                style={styles.produkimage}
                            />
                            <View style={styles.kategori}>
                                <Text style={styles.kategoritext}>Kerajinan</Text>
                            </View>
                            <Text style={styles.produktitleharga}>Bros Dagu</Text>
                            <Text style={styles.description}>Bros Dagu Safitri</Text>
                            <Text style={styles.produktitleharga}>Rp.5.000,00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        <Footer/>
    </View>
  );
}

const styles = ({
        background: {
            backgroundColor:'#f6f6f6'
        },

        container: {
            marginHorizontal:20,
            paddingBottom:90
        },
        
        logo:{
            height:50,
            width:200,
            marginBottom:30,
            alignSelf:'center'
        },

        searchflex: {
            paddingTop:30,
            flexDirection:'row',
            alignItems:'center'
        },

        searchinput:{
            width:250,
            borderRadius:20,
            padding:5,
            paddingLeft:15,
            borderColor:"#2f318d",
            height:50,
            borderWidth:1
        },

        searchbutton:{
            backgroundColor:'#2f318d',
            borderRadius:75,
            width:50,
            height:50,
            alignItems:'center',
            paddingTop:10,
            marginLeft:10
        },

        produk:{
            paddingTop:30,
            fontSize:20,
            fontWeight:'bold',
            marginBottom:10
        },

        cardflex:{
            flexDirection:'row',
            marginHorizontal:-10
        },

    cardcontainer:{
            flexDirection:'column',
            padding:5,
            borderRadius:10,
            marginHorizontal:5
        },

        produkimage:{
            height:200,width:150,borderRadius:10
        },

        kategori:{
            backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginTop:10,alignSelf:'center'
        },

        kategoritext:{
            fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:11
        },

        produktitleharga:{
            alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'
        },

        description:{
            alignSelf:'center',fontSize:12,paddingTop:5
        }
})