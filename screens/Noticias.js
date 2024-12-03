import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('https://uasdapi.ia3x.com/noticias');
        setNoticias(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNoticias();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noticia}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
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
