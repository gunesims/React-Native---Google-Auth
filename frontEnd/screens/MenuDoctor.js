import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function MenuDoctor({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Doctor</Text>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/921/921059.png' }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Crear cita" onPress={() => navigation.navigate("CrearCitas")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ver citas" onPress={() => console.log('Ver citas')} />
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
    width: '80%',
  },
});
