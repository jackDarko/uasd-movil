import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Deuda() {
  const [deuda, setDeuda] = useState(0);

  useEffect(() => {
    fetch('https://uasdapi.ia3x.com/deudas')
      .then(response => response.json())
      .then(data => setDeuda(data.monto))
      .catch(error => console.error('Error al cargar deuda:', error));
  }, []);

  const handlePagar = () => {
    // Redirige a la página de pago
    console.log('Redirigiendo a la página de pago...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado de Deuda</Text>
      <Text style={styles.deuda}>{`Monto pendiente: RD$ ${deuda}`}</Text>
      <Button title="Pagar" onPress={handlePagar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  deuda: { fontSize: 18, marginBottom: 20 },
});
