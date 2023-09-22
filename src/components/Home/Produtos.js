import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Text, Button, List } from 'react-native-paper';
import fornecedorService from '../../services/produtos';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    const data = await produtoService.getAllProdutos();
    setProdutos(data);
  };

  useEffect(async () => {
    getProdutos();
  }, []);

  const updateProdutos = async () => {
    await getProdutos();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Produtos</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        <>
        {produtos.map((produto) => (
          <List.Item key={produto.id} title={produto.descricao} />
        ))}
      </>
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
