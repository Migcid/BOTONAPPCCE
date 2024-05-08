import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export function ReloadButton() {
  return (
    <PaperProvider>
        <View  style={styles.container}>
     
            <Button 
                icon="web-refresh" mode="elevated" buttonColor='#4B5560' textColor="#ffffff" onPress={() => WebBrowser.openBrowserAsync('https://www.iglesiacce.org')}> Abrir Página Iglesia
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
    //marginTop: '5', //5
    //maxHeight: 50,

    
  },
});