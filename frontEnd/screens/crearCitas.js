import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, Modal, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CrearCitas() {
  const [duiPaciente, setDuiPaciente] = useState('');
  const [fechaCita, setFechaCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  const [detallesCita, setDetallesCita] = useState('');
  const [dtpVisible, setDtpVisible] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear cita</Text>
      <TextInput
        style={styles.input}
        placeholder="DUI del paciente"
        value={duiPaciente}
        onChangeText={(text) => setDuiPaciente(text)}
      />
      <Text style={styles.label}>Fecha de cita</Text>

      <Pressable onPress={()=>{setDtpVisible(true)}}>
            <Image style={styles.calendarImg} source={{uri:"https://static.vecteezy.com/system/resources/previews/014/586/732/original/calendar-icon-a-red-calendar-for-reminders-of-appointments-and-important-festivals-in-the-year-png.png"}} />
      </Pressable>

       <Modal onRequestClose={()=>{setDtpVisible(false)}} visible={dtpVisible}>
        <View style={styles.modalDTP}>
            <DateTimePicker onChange={()=>{setDtpVisible(false)}} value={new Date()}/>
        </View>
       </Modal>

      <Text style={styles.label}>Hora de la cita</Text>
      <TextInput
        style={styles.input}
        placeholder="Hora de la cita"
        value={horaCita}
        onChangeText={(text) => setHoraCita(text)}
      />
      <Text style={styles.label}>Detalles de la cita</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Detalles de la cita"
        value={detallesCita}
        onChangeText={(text) => setDetallesCita(text)}
        multiline
        numberOfLines={4}
      />
    </ScrollView>
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
  label: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  datePicker: {
    width: '100%',
    marginBottom: 10,
  },
  textArea: {
    width: '100%',
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
  calendarImg: {
    width: 60,
    height: 60,
  },
  modalDTP:{
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Fondo rojo con 50% de transparencia
  }
});
