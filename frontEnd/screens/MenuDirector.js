import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function MenuDirector() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7158/7158955.png' }} // Reemplaza con la URL correcta de tu imagen
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Crear Paciente" onPress={() => console.log('Crear Doctor/Paciente')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Crear Doctor" onPress={() => console.log('Crear Doctor/Paciente')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Modificar/Eliminar" onPress={() => console.log('Modificar/Eliminar')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%', // Ajusta el ancho de los botones según tu preferencia
  },
});
