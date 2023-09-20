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
        <>
        {fornecedores.map((fornecedor) => (
          <List.Item key={fornecedor.id} title={fornecedor.descricao} />
        ))}
      </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuEndereco: {
    flexDirection: 'row',
  },
  localizacao: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
