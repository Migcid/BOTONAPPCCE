import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const SplashScreenHandler = () => {
  useEffect(() => {
    const hideSplashScreen = async () => {
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }, []);

  return null; //  no renderiza nada al indicar null 
}
export default SplashScreenHandler;
