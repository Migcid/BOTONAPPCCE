import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export function VerCulto() {
  return (
    <PaperProvider>
        <View  style={styles.container}>
     
            <Button 
                icon="eye" mode="elevated" buttonColor='#4B5560' textColor="#ffffff"  onPress={() => WebBrowser.openBrowserAsync('https://www.iglesiacce.org/livestream')}> Transmisión En Vivo
            </Button>
        </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //minHeight: '2%',
    
    //backgroundColor: '#4B5560',
    //maxHeight: 50,

    
  },
});