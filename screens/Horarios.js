import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function Horarios() {
  // Horarios estáticos para materias de software
  const horarios = [
    {
      materia: 'Programación Web',
      hora_inicio: '8:00 AM',
      hora_fin: '10:00 AM',
      aula: 'A-101',
      profesor: 'Ing. Juan Pérez',
    },
    {
      materia: 'Bases de Datos',
      hora_inicio: '10:15 AM',
      hora_fin: '12:15 PM',
      aula: 'B-202',
      profesor: 'Ing. María González',
    },
    {
      materia: 'Desarrollo de Aplicaciones Móviles',
      hora_inicio: '1:00 PM',
      hora_fin: '3:00 PM',
      aula: 'C-303',
      profesor: 'Ing. Carlos Ramírez',
    },
    {
      materia: 'Redes de Computadoras',
      hora_inicio: '3:15 PM',
      hora_fin: '5:15 PM',
      aula: 'D-404',
      profesor: 'Ing. Ana López',
    },
    {
      materia: 'Inteligencia Artificial',
      hora_inicio: '5:30 PM',
      hora_fin: '7:30 PM',
      aula: 'E-505',
      profesor: 'Dr. Pedro Martínez',
    },
  ];

  // Estado para manejar qué materia está desplegada
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Función para manejar el desplegado
  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Horarios</Text>
      <FlatList
        data={horarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.horarioItem}>
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Text style={styles.materia}>{item.materia}</Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <View style={styles.infoContainer}>
                <Text>{`Hora: ${item.hora_inicio} - ${item.hora_fin}`}</Text>
                <Text>{`Aula: ${item.aula}`}</Text>
                <Text>{`Profesor: ${item.profesor}`}</Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  horarioItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  materia: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  infoContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
});
