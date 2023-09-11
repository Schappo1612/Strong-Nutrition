import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

export default function Empresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    async function carregarEmpresas() {
      const response = await api.get('parceiras');
      setEmpresas(response.data);
    }
    carregarEmpresas();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Empresas Parceiras</Text>
      </View>
      <ScrollView style={styles.lista}>
        {empresas.map((empresa) => (
          <TouchableOpacity style={styles.item} key={empresa.id}>
            <Image
              source={{ uri: empresa.image }} 
              style={styles.imagem}
            />
            <View style={styles.info}>
              <Text style={styles.empresaTitulo}>
                {' '}
                {empresa.title}{' '}
              </Text>
              <View style={styles.descricao}>
                <MaterialIcons name="star" size={20} color="#FF7C01" />
                <Text style={styles.estrela}>
                  {empresa.star || 'Novo!'}
                </Text>
                <Text style={styles.categorias}> {empresa.categories}</Text>
                <Text style={styles.distancia}> {empresa.distance}</Text>
              </View>
              <Text style={styles.atraso}> {empresa.delay} </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginLeft: 20,
    marginRight: 0,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  lista: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1E90FF',
    borderRadius: 4,
    marginTop: 5,
    marginRight: 15,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
  },
  restauranteTitulo: {
    fontWeight: 'bold',
    color: '#333',
  },
  descricao: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },
  estrela: {
    fontSize: 14,
    color: '#999',
  },
  categorias: {
    fontSize: 14,
    color: '#999',
  },
  distancia: {
    fontSize: 14,
    color: '#999',
  },
  atraso: {
    marginTop: 15,
    fontSize: 14,
    color: '#999',
  },
});
