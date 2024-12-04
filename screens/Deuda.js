import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Deuda() {
  const [deuda, setDeuda] = useState(20000); // Monto inventado en pesos dominicanos
  const [cuotas, setCuotas] = useState([]);

  useEffect(() => {
    dividirEnCuotas(deuda);
  }, [deuda]);

  const dividirEnCuotas = (monto) => {
    const numeroDeCuotas = 4;
    const montoPorCuota = (monto / numeroDeCuotas).toFixed(2);
    const nuevasCuotas = Array.from({ length: numeroDeCuotas }, (_, i) => ({
      id: i + 1,
      monto: montoPorCuota
    }));
    setCuotas(nuevasCuotas);
  };

  const handlePagar = () => {
    console.log('Redirigiendo a la página de pago...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado de Deuda</Text>
      <Text style={styles.deuda}>{`Monto pendiente: RD$ ${deuda}`}</Text>
      <Text style={styles.subtitle}>Cuotas:</Text>
      {cuotas.map((cuota) => (
        <Text key={cuota.id} style={styles.cuota}>{`Cuota ${cuota.id}: RD$ ${cuota.monto}`}</Text>
      ))}
      <Button title="Pagar" onPress={handlePagar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  deuda: { fontSize: 18, marginBottom: 20 },
  subtitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  cuota: { fontSize: 18, marginBottom: 5 },
});