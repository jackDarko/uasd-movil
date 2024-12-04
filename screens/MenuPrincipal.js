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
      <Text style={styles.subtitle}>Historia</Text>
      <Text style={styles.text}>
        La Universidad Autónoma de Santo Domingo (UASD) es la universidad más antigua del continente
        americano, fundada en 1538. A lo largo de los siglos, ha evolucionado para convertirse en la
        principal institución de educación superior en la República Dominicana, con una amplia
        oferta académica y un compromiso constante con la excelencia.
      </Text>
      <Text style={styles.subtitle}>Facultades</Text>
      <Text style={styles.text}>
        La UASD cuenta con varias facultades, entre ellas:
        - Facultad de Ciencias
        - Facultad de Humanidades
        - Facultad de Ciencias Económicas y Sociales
        - Facultad de Ingeniería y Arquitectura
        - Facultad de Ciencias de la Salud
        - Facultad de Artes
      </Text>
      <Text style={styles.subtitle}>Investigación</Text>
      <Text style={styles.text}>
        La UASD es un centro de investigación reconocido, con numerosos proyectos en diversas áreas
        del conocimiento. La universidad fomenta la investigación entre sus estudiantes y profesores,
        promoviendo la innovación y el desarrollo científico.
      </Text>
      <Text style={styles.subtitle}>Vida Estudiantil</Text>
      <Text style={styles.text}>
        La vida estudiantil en la UASD es vibrante y diversa, con una amplia gama de actividades
        extracurriculares, clubes estudiantiles, eventos culturales y deportivos. La universidad
        ofrece un entorno inclusivo y dinámico para el desarrollo integral de sus estudiantes.
      </Text>
      <Text style={styles.subtitle}>Infraestructura</Text>
      <Text style={styles.text}>
        La UASD cuenta con modernas instalaciones, incluyendo laboratorios equipados, bibliotecas,
        auditorios, y espacios deportivos. La universidad está en constante mejora de su
        infraestructura para ofrecer un ambiente óptimo para el aprendizaje y la investigación.
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