import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export function ButtonDar() {
  return (
    <PaperProvider>
        <View  style={styles.container}>
     
            <Button 
                icon="hand-heart" mode="elevated" buttonColor='#4B5560' textColor="#ffffff" onPress={() => WebBrowser.openBrowserAsync('https://www.iglesiacce.org/sostenimiento-de-la-iglesia')}> Dar
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
    //padding: 30,
    //backgroundColor: 'blue',
    //   maxHeight: 50,
    //borderWidth: 2,
    //borderRadius: 30,
    
  },
});