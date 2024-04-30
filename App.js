
import { StyleSheet, Text, View } from 'react-native';
import { Iglesia } from "./components/linkWeb";
import { ReloadButton } from './components/reOpen';
import { ButtonDar } from './components/ButtonDar';
import { VerCulto } from './components/verCulto';
import { Sermones } from './components/Sermones';
import { Anuncios } from './components/Anuncios';
import SplashScreenHandler from './components/OcultarSplash';
//import { SafeAreaView,  } from 'react-native-web';






export default function App() {
  return (
   


<View style={styles.container}>  
  
   <Iglesia  />
<View style={styles.title}>

            <Text>
              BIENVENIDO A IGLESIA CCE
            </Text>
  </View>

  <View style={styles.home}>
             
             <ReloadButton  />
             <VerCulto/>
             <ButtonDar/>
             <Sermones />
             <Anuncios />
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
