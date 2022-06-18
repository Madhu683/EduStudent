import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import constants from '../constants'

const EventsScreen = () => {
  return (
    <View style={{height:'100%',width:'100%'}}>
      <View style={{backgroundColor:constants.baseColor,width:'100%',height:'100%',position:'absolute'}}>
           <View style={{backgroundColor:constants.secondaryColor,width:"100%",height:'100%',marginTop:20,borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
             <Text style={{fontSize:25,color:constants.fadedColor,marginLeft:20,marginTop:20}}>Up Comming</Text>
             <View style={{backgroundColor:constants.fadedColor,width:"100%",height:'100%',marginTop:20,borderTopLeftRadius: 40, borderTopRightRadius: 40,alignItems:'center'}}>
              <View style={{width:'90%',height:'23%',backgroundColor:'blue',margin:20,borderRadius:10}}>
                <Image style={{width:'100%',height:'100%',borderRadius:10,position:'absolute'}}source={require("../images/1.jpeg")} />
                <View style={{width:'100%',height:'100%',borderRadius:10,backgroundColor:'black',opacity:0.6,flexDirection:'row'}}>
                    <Text style={{fontSize:18,position:'absolute',bottom:0,left:0,marginLeft:20,marginBottom:5,color:constants.fadedColor}}>Seminar</Text>
                    <Text style={{fontSize:15,position:'absolute',bottom:0,right:0,marginRight:20,marginBottom:5,color:constants.fadedColor}}>20 feb 2022</Text>
                </View>
              </View>
             </View>
           </View>
       </View>
    </View>
  )
}

export default EventsScreen