import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/uasd_logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Universidad Autónoma de Santo Domingo</Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  text: { textAlign: 'center', marginVertical: 10 },
});

export default Landing;
