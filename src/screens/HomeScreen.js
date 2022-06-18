import { View, Text,SafeAreaView,StatusBar, TextInput, FlatList } from 'react-native'
import React from 'react'
import constants from '../constants'
import {Feather,MaterialCommunityIcons} from 'react-native-vector-icons'

const DATA = [
    {   id:1,
        icon:"party-popper",
        title:"Events",

    },
    {   id:2,
        icon:"notification-clear-all",
        title:"Notices",

    },
    {
        icon:"menu",
        title:"Upload Asssignments",

    }
]

function Background()
{
    return(
        <SafeAreaView style={{ backgroundColor: constants.baseColor, width: "100%", height: "100%" ,position:'absolute'}}>

          <View style={{ backgroundColor: constants.baseColor, width: "100%", height: "33%" }}>
              <View style={{ backgroundColor: constants.secondaryColor }}>

              </View>
          </View>
          <View style={{ backgroundColor: constants.primaryColor, width: "100%", height: "66%", borderTopLeftRadius: 100, borderTopRightRadius: 100 }}>
              <View style={{ backgroundColor: constants.primaryColor, width: "100%", height: "50%", borderTopLeftRadius: 100, borderTopRightRadius: 100 }}>

              </View>
              <View style={{ backgroundColor: constants.secondaryColor, width: "100%", height: "50%", borderTopLeftRadius: 100, borderTopRightRadius: 100 }}>

              </View>
          </View>
      </SafeAreaView>
    )
}
export default function HomeScreen() {
  return (
    <View style={{width:'100%',height:'100%'}}>
        <Background />   
        <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
            <View style={{marginTop:30,width:"10%",marginLeft:10}}>
                <MaterialCommunityIcons name="menu" color={constants.textColor} size={40} />
            </View>
            <View style={{width:"70%"}}></View>
            <View style={{flexDirection:'row',marginTop:35,width:"20%"}}>
                 <View style={{marginRight:10}}><MaterialCommunityIcons name="bell-badge" color={constants.textColor} size={25}  /></View>
                 <View><Feather name="edit" color={constants.textColor} size={25} /></View>
            </View>
        </View>
        <Text style={{color:constants.textColor,fontSize:30,marginLeft:10}}>Good Morning!</Text>
        <View style={{flexDirection:'row',marginTop:10,backgroundColor:constants.fadedColor,width:'85%',height:'5%',marginLeft:30,shadowColor:'black',shadowOpacity:0.8,shadowRadius:2,elevation:5,borderRadius:10}}>
            <View style={{margin:5,justifyContent:'center'}}><Feather name="search" color={constants.secondaryColor} size={20} /></View>
            <TextInput placeholder='Search' style={{fontSize:18,width:"90%"}}/>
        </View>
        <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
        <FlatList  data={DATA}
        renderItem={displayItem}
        numColumns={2}
        keyExtractor={item=>item.id}/>
        </View>
        <View style={{width:'100%',alignItems:'center'}}>
        <View style={{backgroundColor:constants.fadedColor,margin:10,width:"80%",height:120,shadowColor:'black',shadowOpacity:0.8,shadowRadius:2,elevation:5,borderRadius:20}}>
        </View>
        </View>
    </View>
   
    
  )
}

const displayItem=({item})=>
{
    return(
        <View style={{backgroundColor:constants.fadedColor,margin:10,width:150,height:120,shadowColor:'black',shadowOpacity:0.8,shadowRadius:2,elevation:5,borderRadius:20}}>
            <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5,width:20,marginLeft:10}}>
                <MaterialCommunityIcons name={item.icon} color={constants.textColor} size={25} />
            </View>
            <Text style={{alignSelf:'center',textAlign:"left",flexShrink:1,marginLeft:10}}>{item.title}</Text>
            </View>
            
        </View>

    )
}