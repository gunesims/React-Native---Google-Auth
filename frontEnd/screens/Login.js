import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import * as Font from 'expo-font';

export default function LogIn({navigation}) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  const googleIco = require("../assets/google.png");

  useEffect(() => {
    // Carga la fuente de forma asíncrona
    (async () => {
      await Font.loadAsync({
        'roboto-regular': require('../assets/Roboto-Regular.ttf'), // Asegúrate de que la ruta sea correcta
      });
      setFontLoaded(true);
    })();
  }, []);


  const handleGoogleLogin = () => {
    // Implementa la lógica de inicio de sesión con Google aquí
    console.log('Iniciando sesión con Google');
  };

  if (!fontLoaded) {
    return null; // Espera hasta que la fuente se cargue
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Universidad_don_bosco.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.label}>Logueo mediante Google</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleGoogleLogin}>
          <Image source={googleIco} style={styles.googleImg}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'roboto-regular',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  googleImg: {
    width: 40, // Tamaño deseado para el icono de Google
    height: 40,
  }
});
