import React from 'react';
import { View ,Button,Image,StyleSheet,Text} from 'react-native';

export default function Home({navigation}){

    const pressHandler=()=>{
        navigation.navigate('Javaquiz');
    }

    
return(
    <View>
       <Image style={styles.back_img} source={require('../image/quizback_img.jpg')}/>
       <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.countview1}></View>
        <View style={styles.countview2}>
        <Button style={styles.java_butt} title='Start' onPress={pressHandler}/> 
        </View>
        </View>
        
    </View>
)

}

const styles = StyleSheet.create({
    back_img:{
        width:'100%',
        height:'45%',
        position:'relative',
      },
      
    
      facul:{
        color:'black',
        padding:10,
        // backgroundColor:'#F26B8A',
        fontSize:20,
        alignItems: 'center',
        fontFamily:'sans-serif-light',
        
      },

      countview1:{
        width: '100%',
        height: 100,
        
      },
  
      countview2:{
        width: '50%',
        height: 100,
        position:'relative',
        left:'25%',
       },


})
