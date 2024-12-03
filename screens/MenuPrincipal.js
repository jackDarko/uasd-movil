import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Noticias from './Noticias';
import Horarios from './Horarios';
import Deuda from './Deuda';
import Solicitudes from './Solicitudes';

const Drawer = createDrawerNavigator();

// Información del estudiante
const StudentInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require("../assets/profile.jpg")} // Cambiar por la URL de la imagen del estudiante
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Rodrigo Jamel Lorenzo</Text> {/* Cambiar por el nombre del estudiante */}
      <Text style={styles.profileMatricula}>Matrícula: 2023123456</Text> {/* Cambiar por la matrícula del estudiante */}
    </View>
  );
};

// Contenido personalizado para el menú
const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Resetea la pila de navegación y redirige al usuario al Login
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <DrawerContentScrollView {...props}>
      <StudentInfo /> {/* Información del estudiante */}
      <DrawerItemList {...props} />
      <View style={styles.logoutButtonContainer}>
        <Button title="Cerrar Sesión" onPress={handleLogout} color="#FF4D4D" />
      </View>
    </DrawerContentScrollView>
  );
};

// Configuración del menú principal
const MenuPrincipal = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Inicio" component={InicioScreen} />
      <Drawer.Screen name="Noticias" component={Noticias} />
      <Drawer.Screen name="Horarios" component={Horarios} />
      <Drawer.Screen name="Deuda" component={Deuda} />
      <Drawer.Screen name="Solicitudes" component={Solicitudes} />
    </Drawer.Navigator>
  );
};

// Pantalla de inicio con información sobre la UASD
const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Universidad Autónoma de Santo Domingo (UASD)</Text>
      <Text style={styles.subtitle}>Misión</Text>
      <Text style={styles.text}>
        Ofrecer educación superior de calidad, fomentar la investigación y contribuir al desarrollo
        social, económico y cultural de la República Dominicana.
      </Text>
      <Text style={styles.subtitle}>Visión</Text>
      <Text style={styles.text}>
        Ser reconocida como una institución de excelencia académica, innovadora y comprometida con
        los valores éticos y sociales.
      </Text>
      <Text style={styles.subtitle}>Valores</Text>
      <Text style={styles.text}>
        Compromiso, responsabilidad, integridad, respeto, innovación y trabajo en equipo.
      </Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileMatricula: {
    fontSize: 14,
    color: '#555',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  logoutButtonContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
});

export default MenuPrincipal;
