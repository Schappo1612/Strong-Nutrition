import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {

      setProdutos(response.data);
    }
    carregarProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Produtos</Text>
      </View>
      <ScrollView style={styles.lista}>
        {produtos.map((produto) => (
          <TouchableOpacity style={styles.item} key={produto.id}>
            <Image
              source={{ uri: produto.parceiras_url }} 
              style={styles.imagem}
            />
            <View style={styles.info}>
              <Text style={styles.produtoTitulo}>
                {' '}
                {produto.title}{' '}
              </Text>
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
