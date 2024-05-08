
import { StyleSheet, Text, View } from 'react-native';
import { Iglesia } from "./components/linkWeb";
import { ReloadButton } from './components/reOpen';
import { ButtonDar } from './components/ButtonDar';
import { VerCulto } from './components/verCulto';
import { Sermones } from './components/Sermones';
import { Anuncios } from './components/Anuncios';
import { Footer } from './components/footer';
//import { useFonts } from 'expo-font';
import SplashScreenHandler from './components/OcultarSplash';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
} from '@expo-google-fonts/playfair-display';



export default function App() {

  const [fontsLoaded] = useFonts({
   /* Poppins: require("./assets/fonts/Poppins-Light.ttf"),
    Warp: require("./assets/fonts/TiltWarp-Regular.ttf"),
    Playfair: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),*/
 // en el ejemplo de la pagina de la fuente, indica lets antes del corchete pero lo cambiamos a const
    
      PlayfairDisplay_400Regular,
      PlayfairDisplay_500Medium,
      PlayfairDisplay_600SemiBold,
      PlayfairDisplay_700Bold,
      PlayfairDisplay_800ExtraBold,
      PlayfairDisplay_900Black,
      PlayfairDisplay_400Regular_Italic,
      PlayfairDisplay_500Medium_Italic,
      PlayfairDisplay_600SemiBold_Italic,
      PlayfairDisplay_700Bold_Italic,
      PlayfairDisplay_800ExtraBold_Italic,
      PlayfairDisplay_900Black_Italic,
    });
  
    if (!fontsLoaded) {
      return null;
    }


  return (
   
    

<View style={styles.container} >  
  
   <SplashScreenHandler />
   <Iglesia  />
<View style={styles.title}>

            <Text /*style={{ fontFamily: "Playfair", fontSize: 25,}}*/>
              BIENVENIDO A IGLESIA CCE
            </Text>
  </View>

  <View style={styles.home}>
             
             <ReloadButton  />
             <VerCulto/>
             <ButtonDar/>
             <Sermones />
             <Anuncios />
             <Footer />
             
  </View>
   
</View>


  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#ffffff',
   alignItems: 'center',
   justifyContent: 'space-between', // space-around
   width: '100%',
   height: '100%', //auto
   //fontSize: 85,
   fontFamily: 'PlayfairDisplay_400Regular',
    
  },
 
  title: {
    
    flex:1, 
    width: '100%',
    height: '10%',
    backgroundColor: '#CAD2DA',
    color:'#ffffff',
    padding: '0',
    margin:0,
    justifyContent: 'center', // para centrar solo el texto verticalmente
    alignItems:'center', // para centrar solo el texto horizontalmente
    verticalAlign: 'center',
    fontFamily: "PlayfairDisplay_400Regular",
  },
 
  
  home: {
    
    flex:6,
    width: '100%',
    height: '60%', // la altura es para ocupar el 90% de la pantalla sin incluir el BIENVENIDO. antes estaba en el 90%
    backgroundColor: '#ffffff',
    color:'#ffffff',
    //padding: 0,
    //marginBottom:100,
    alignItems:'center',
    //fontSize: 150,
  },
 
});
