import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([
    { tipo: 'Solicitud de Beca', estado: 'Rechazada' },
    { tipo: 'Solicitud de Cambio de Carrera', estado: 'Pendiente' },
    { tipo: 'Solicitud de Reembolso', estado: 'Pendiente' }
  ]); // Información inventada

  const handleNuevaSolicitud = () => {
    console.log('Redirigiendo para crear nueva solicitud...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Solicitudes</Text>
      <FlatList
        data={solicitudes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.solicitudItem}>
            <Text style={styles.solicitudTitulo}>{item.tipo}</Text>
            <Text>{`Estado: ${item.estado}`}</Text>
          </View>
        )}
      />
      <Button title="Nueva Solicitud" onPress={handleNuevaSolicitud} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  solicitudItem: { marginBottom: 15 },
  solicitudTitulo: { fontSize: 18, fontWeight: 'bold' },
});