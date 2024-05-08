import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { PaperProvider } from "react-native-paper";



export function Footer(){
return(
<PaperProvider>
        <View  >
     
            <Text style={styles.footer}>
                Version 1.1 Beta
            </Text>
        </View>
    </PaperProvider>
    
);

}

const styles = StyleSheet.create({
    footer: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
      //minHeight: '2%',
      
      //backgroundColor: '#4B5560',
      //maxHeight: 50,
      fontFamily: "PlayfairDisplay_400Regular",
      fontSize: 15,
      
    },
  });
