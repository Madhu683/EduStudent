import { View, Text, SafeAreaView } from 'react-native'
import React ,{useEffect}from 'react'
import constants from '../constants'

const SplashScreen = ({navigation}) => {
  
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Home");
        },5000)
    },[]);

  return (
    <SafeAreaView style={{backgroundColor:constants.secondaryColor,width:"100%",height:"100%",justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:constants.fadedColor,fontStyle:'italic',fontSize:40}}>EduStudnet</Text>
    </SafeAreaView>
  )
}

export default SplashScreen