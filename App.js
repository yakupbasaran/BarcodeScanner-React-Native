import React from "react";
import QRCodeScanner from "react-native-qrcode-scanner";
import {Linking,Text,TouchableOpacity,Alert} from "react-native";

export default class App extends React.Component{
  
  ifScaned= e=>{
    Linking.openURL(e.data).catch(err=>
      Alert.alert("Invalid QRCode",e.data));
  }

  render(){
    return(
      <QRCodeScanner
      containerStyle={{backgroundColor:"#FFF", marginBottom:"35%"}}
      onRead={this.ifScaned}
      reactivate={true}
      permissionDialogMessage="Nedd Permission To Access Camera(İzin lazım.)"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{borderColor:"#FFF",borderRadius:10}}
      bottomContent={
        <TouchableOpacity>
          <Text style={{fontSize:21,color:'rgb(0,122,255)'}}>Yakup Başaran</Text>
        </TouchableOpacity>
      }/>
    )
  }
}