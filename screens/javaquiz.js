// import React from 'react';
import { View ,Text,StyleSheet, Button,Alert} from 'react-native';
import React,{useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { color } from 'react-native-reanimated';
export default function Javaquiz(){

  const [details,setDetails]=useState([
    {title:'1.Which of those doesnt have an index based structure?',key:'1',option1:'Map',option2:'Set',option3:'List',answer:3,ans:'List'},
    {title:'2.java.util.Collections is a:',key:'2',option1:'Class',option2:'Interface',option3:'Object',answer:1,ans:'Class'},
    {title:'3.Methods such as reverse, shuffle are offered in:',key:'3',option1:'Object',option2:'Collections',option3:'Apache Commons Collections',answer:2,ans:'Collections'},
    {title:'4.Which of those allows duplicate elements?',key:'4',option1:'Set',option2:'All',option3:'List',answer:3,ans:'List'},
    {title:'5.Which allows the storage of a null key and null values?',key:'5',option1:'Hashtable',option2:'HashMap',option3:'None of the above',answer:2,ans:'HashMap'},
   
  ])

    let count=0;
    
  function handleChange(value,data){
    
    details.map((item)=>{
    if(item.key===data){
      if(item.answer===value){
        count++;
        // console.log(count);
       
      }
     console.log(item.ans);
     Alert.alert(
      'Answer',
      ' '+ item.ans,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
    }
  })
  
  }

// function refreshPage(){
//   window.location.reload(false);
//   }

  function submit(){
    Alert.alert(
      'Quiz Over!',
      'Your Score '+count,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }


    return(
  
       
       <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.para}>
        <ScrollView>
        {details.map((item)=>{
          return(
            <View key={item.key}>
            <Text style={styles.questions}>{item.title}</Text>
            
            <RadioForm 
              radio_props={[
                {label:item.option1,value:1},
                {label:item.option2,value:2},
                {label:item.option3,value:3},

              ]}
              initial={null}
              formHorizontal={false}
              labelHorizontal={true}
              buttonSize={12}
              animation={true}
              onPress={(value) =>handleChange(value,item.key)}
              />
              <View style={styles.space}>
            <Text style={styles.ans}>{item.ans}</Text>
              </View>
            </View>
          )
        })}


        <Button title='submit' onPress={submit}/>
        </ScrollView>

        </View>
        
      </View>

    )

}





const styles = StyleSheet.create({

    para:{
        width:'100%',
        height:'100%',
    },
    questions:{
      fontSize:18,
      fontFamily:'sans-serif-light',
    },

    space:{
      width:'100%',
      height:20,
      backgroundColor:'white',
    },

    ans:{
     opacity:0,
    }
})