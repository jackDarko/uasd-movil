import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Noticias = () => {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      title: 'Profesor declara UASD es víctima de un sistema de educación básica deficiente',
      body: 'EL NUEVO DIARIO, SANTO DOMINGO.- Edwin Ricardo, profesor de la Universidad Autónoma de Santo Domingo (UASD) y dirigente político del Partido de la Liberación Dominicana (PLD), afirmó que la ...',
      expanded: false
    },
    {
      id: 2,
      title: 'La UASD en la Época Actual: Imperativos para una “Transformación Digital”',
      body: 'La Universidad Autónoma de Santo Domingo (UASD) es, sin lugar a dudas, la institución dominicana que más ha contribuido a la ...',
      expanded: false
    },
    {
      id: 3,
      title: 'La UASD otorga título diseñador Leonel Lirio',
      body: 'La Universidad Autónoma de Santo Domingo (UASD) celebró una emotiva ceremonia en la que otorgó el título de “Profesor ...',
      expanded: false
    },
    {
      id: 4,
      title: 'La UASD y El “Honoris-Causa”- A Luis Abinader',
      body: 'Consejo Universitario y el Claustro Menor de la Universidad Autónoma de Santo Domingo (UASD) le concedieron el Doctorado ...',
      expanded: false
    },
    {
      id: 5,
      title: 'UASD otorga doctorado honoris causa a Luis Abinader por sus aportes a la educación y al desarrollo nacional',
      body: 'La Universidad Autónoma de Santo Domingo (UASD) otorgó este jueves al presidente Luis Rodolfo Abinader Corona el título de ...',
      expanded: false
    },
    {
      id: 6,
      title: 'Estudiantes de la UASD organizan feria de ciencias',
      body: 'SANTO DOMINGO.- Los estudiantes de la Universidad Autónoma de Santo Domingo (UASD) organizaron una feria de ciencias para mostrar sus proyectos innovadores...',
      expanded: false
    },
    {
      id: 7,
      title: 'La UASD inaugura nuevo laboratorio de tecnología',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) inauguró un nuevo laboratorio de tecnología equipado con las últimas herramientas...',
      expanded: false
    },
    {
      id: 8,
      title: 'Conferencia sobre cambio climático en la UASD',
      body: 'SANTO DOMINGO.- La UASD organizó una conferencia sobre el impacto del cambio climático en la región del Caribe, con la participación de expertos internacionales...',
      expanded: false
    },
    {
      id: 9,
      title: 'La UASD recibe donación de libros para su biblioteca',
      body: 'SANTO DOMINGO.- La biblioteca de la Universidad Autónoma de Santo Domingo (UASD) recibió una generosa donación de libros de parte de una organización internacional...',
      expanded: false
    },
    {
      id: 10,
      title: 'UASD celebra el Día del Estudiante con actividades culturales',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) celebró el Día del Estudiante con una serie de actividades culturales y recreativas...',
      expanded: false
    },
    {
      id: 11,
      title: 'La UASD lanza nuevo programa de becas para estudiantes de bajos recursos',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha lanzado un nuevo programa de becas destinado a estudiantes de bajos recursos económicos...',
      expanded: false
    },
    {
      id: 12,
      title: 'Investigadores de la UASD descubren nueva especie de planta en el Caribe',
      body: 'SANTO DOMINGO.- Un equipo de investigadores de la Universidad Autónoma de Santo Domingo (UASD) ha descubierto una nueva especie de planta en la región del Caribe...',
      expanded: false
    },
    {
      id: 13,
      title: 'La UASD firma convenio de colaboración con universidad extranjera',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha firmado un convenio de colaboración con una universidad extranjera para promover el intercambio académico...',
      expanded: false
    },
    {
      id: 14,
      title: 'La UASD organiza maratón solidario para recaudar fondos',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha organizado un maratón solidario con el objetivo de recaudar fondos para proyectos comunitarios...',
      expanded: false
    },
    {
      id: 15,
      title: 'La UASD celebra su aniversario con una serie de eventos',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) celebra su aniversario con una serie de eventos académicos y culturales...',
      expanded: false
    },
    {
      id: 16,
      title: 'La UASD implementa nuevas medidas de seguridad en el campus',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha implementado nuevas medidas de seguridad en su campus para garantizar la seguridad de estudiantes y personal...',
      expanded: false
    },
    {
      id: 17,
      title: 'La UASD recibe reconocimiento por su labor en investigación científica',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha recibido un reconocimiento por su destacada labor en el campo de la investigación científica...',
      expanded: false
    },
    {
      id: 18,
      title: 'La UASD organiza taller sobre emprendimiento para estudiantes',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha organizado un taller sobre emprendimiento dirigido a sus estudiantes...',
      expanded: false
    },
    {
      id: 19,
      title: 'La UASD inaugura nueva residencia estudiantil',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha inaugurado una nueva residencia estudiantil para alojar a estudiantes de otras provincias...',
      expanded: false
    },
    {
      id: 20,
      title: 'La UASD lanza campaña de concienciación sobre el medio ambiente',
      body: 'SANTO DOMINGO.- La Universidad Autónoma de Santo Domingo (UASD) ha lanzado una campaña de concienciación sobre la importancia de cuidar el medio ambiente...',
      expanded: false
    }
  ]);

  const toggleExpand = (id) => {
    setNoticias(noticias.map(noticia => 
      noticia.id === id ? { ...noticia, expanded: !noticia.expanded } : noticia
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleExpand(item.id)}>
            <View style={styles.noticia}>
              <Text style={styles.title}>{item.title}</Text>
              {item.expanded && <Text>{item.body}</Text>}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  noticia: { marginBottom: 15, borderBottomWidth: 1, paddingBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default Noticias;