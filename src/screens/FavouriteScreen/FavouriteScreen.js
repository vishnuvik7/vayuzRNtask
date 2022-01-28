import React, { Component } from 'react';
import { View, Text,SafeAreaView,Dimensions,TouchableOpacity,Image, ScrollView,StyleSheet,FlatList } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class FavouriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
        
        
    };
  }

  componentDidMount=()=>{
    console.log("image",this.props.route.params.data)

    
  }

  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>

<View style={{backgroundColor:'white',height:windowHeight/14,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:26,fontWeight:'bold',color:'#117A65'}}>Result</Text>
              </View>
        
              <View style={{backgroundColor:'white',flex:1}}>
                <Image source={{uri:this.props.route.params.data}} style={{width:windowWidth/1.1,height:windowWidth/2,alignSelf:'center',marginTop:windowHeight/3}}></Image>

              </View>
      </SafeAreaView>
    );
  }
}
const { width } = Dimensions.get('window');
const styles1 = StyleSheet.create({
  container: {backgroundColor: 'white',height:windowHeight/3,marginTop:windowHeight/50},
  child: { width, justifyContent: 'center', },
  text: { fontSize: width * 0.5, textAlign: 'center' },
  GridViewContainer: {
    marginTop: windowHeight/40,
    alignItems: 'center',
    justifyContent:'center',
    alignItems:'center',
    height: windowHeight/4.7,
    width:windowWidth/2.5,
    marginHorizontal: windowWidth/50,
    borderColor: "#EEEEEE",
   
    
    borderWidth: 1.5,
    borderRadius:12,
    backgroundColor: "#fff",
  },
  container1: {
    width: windowWidth,
    height: windowHeight/1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#fff"
  },

  GridViewTextLayout: {
    fontSize: 13,
    color:"black",
    fontWeight: "bold",
    justifyContent: 'center',
    marginTop: 5,
    
}

  
});

export default FavouriteScreen;
