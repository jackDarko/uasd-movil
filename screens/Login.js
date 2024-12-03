import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor, complete todos los campos');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://uasdapi.ia3x.com/login', { username, password });
      if (response.status === 200) {
        // Guardar estado de sesión aquí, si es necesario
        navigation.navigate('MenuPrincipal'); // Redirigir al menú
      }
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, intente de nuevo.');
    } finally {
      setLoading(false);
      navigation.navigate('MenuPrincipal'); // Redirigir al menú
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Iniciar Sesión" onPress={handleLogin} />
      )}
      <Button title="¿Olvidaste tu contraseña?" onPress={() => navigation.navigate('RecuperarContraseña')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
});

export default Login;