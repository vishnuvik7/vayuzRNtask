import React, { Component } from 'react';
import { View, Text,SafeAreaView,Dimensions,TouchableOpacity,Image, ScrollView,StyleSheet,FlatList } from 'react-native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class DiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  FetchImage=()=>{
    
    console.log("hii")

    const url = "https://dog.ceo/api/breeds/image/random";

    const header = {
      'Content-Type': 'application/json',
      'X-Requested-With': `XMLHttpRequest`,
      }

    axios.get(url)
    .then((response) => {

      console.log("responsse",response)

      if(response.data.status=="success")
      {
        this.setState({
          image_url:response.data.message
        })

        console.log("image_url",this.state.image_url)       
      }

      this.props.navigation.navigate("FavouriteScreen",{data:this.state.image_url})

    })
    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
       
              <View style={{backgroundColor:'white',height:windowHeight/14,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:26,fontWeight:'bold',color:'#117A65'}}>Vayuz RN Task</Text>
              </View>
     
  <ScrollView  showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
  <View style={styles1.container1}>
  <TouchableOpacity style={styles.loginBtn} onPress={()=>this.FetchImage()}>
        <Text style={styles.loginText}>FETCH</Text>
            </TouchableOpacity>
  </View>
      </ScrollView>
      
      </SafeAreaView>
    );
  }
}


const styles=StyleSheet.create({
  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: windowHeight/15,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: windowHeight/90,
    backgroundColor: "#117A65",
    
  },

  loginText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
})

const { width } = Dimensions.get('window');
const styles1 = StyleSheet.create({
  container: {backgroundColor: 'white',height:windowHeight/3.5,marginTop:windowHeight/50},
  child: { width, justifyContent: 'center', },
  text: { fontSize: width * 0.5, textAlign: 'center' },
 
  container1: {
    width: windowWidth,
    height: windowHeight/1.5,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#fff"
  },
  
});

export default DiscoverScreen;
