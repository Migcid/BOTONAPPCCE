import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export function Anuncios() {
  return (
    <PaperProvider>
        <View  style={styles.container}>
     
            <Button 
                icon="alarm-light-outline" mode="elevated" buttonColor='#4B5560' textColor="#ffffff" onPress={() => WebBrowser.openBrowserAsync('https://www.iglesiacce.org/anuncios')}> Anuncios
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
    //maxHeight: '2%',
    //padding: 30,
    //backgroundColor: 'blue',
    //   maxHeight: 50,
    //borderWidth: 2,
    //borderRadius: 30,
    
  },
});