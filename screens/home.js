import React from 'react';
import { View ,Button,Image,StyleSheet} from 'react-native';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";

export default function Home({navigation}){
const pressHandler=()=>{
        navigation.navigate('Javaquiz');
    }

    
return(
    <View>
       <Image style={styles.background_img} source={require('../image/quizback_img.jpg')}/>
       <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.blank_view}></View>
        <View style={styles.button_view}>
        <Button style={styles.java_butt} title='Start' onPress={pressHandler}/> 
        </View>
        </View>
        
    </View>
)

}

const styles = StyleSheet.create({
    background_img:{
        width: responsiveWidth(100),
        height: responsiveHeight(20),
        position:'relative',
      },

      blank_view:{
        width:  responsiveWidth(100),
        height: responsiveHeight(10),
      },
  
      button_view:{
        width:responsiveWidth(50),
        height:responsiveHeight(10),
        position:'relative',
        left:'25%',
       },


})
