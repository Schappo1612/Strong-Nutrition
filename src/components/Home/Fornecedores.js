import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Text, Button, List } from 'react-native-paper';

import fornecedorService from '../../services/fornecedores';


export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);

  const getFornecedores = async () => {
    const data = await fornecedorService.getAllFornecedores();
    setFornecedores(data);
  };

  useEffect(async () => {
    getFornecedores();
  }, []);

  const updateFornecedores = async () => {
    await getFornecedores();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Fornecedores</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {fornecedores.map((fornecedor) => (
          // <List.Item key={fornecedor.id} title={fornecedor.descricao} />
          <TouchableOpacity key={fornecedor.id} style={styles.fornecedor}>
              <Text> {fornecedor.nome}</Text>
              <Image source={{ uri: fornecedor.imagem?.file }} style={styles.imagem} />
            </TouchableOpacity>
        ))}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 0,
    backgroundColor: "#0000",
  },
  header: {
    marginLeft: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
  },
  lista: {
    marginTop: 10,
    paddingLeft: 20,
  },
  item: {
    marginRight: 15,
    alignItems: "center",
  },
  imagem: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  fornecedorTitulo: {
    fontSize: 16,
    marginTop: 10,
    color: "#999",
  },
  fornecedor: {
    marginLeft: 20,
    marginRight: 55,
  },

});
