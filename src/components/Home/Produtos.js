import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Text, Button, List } from "react-native-paper";

import fornecedorService from "../../services/fornecedores";

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
        <Text style={styles.titulo}>Produtos</Text>
      </View>
      <View
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {fornecedores.map((fornecedor) => (
          // <List.Item key={fornecedor.id} title={fornecedor.descricao} />
          <TouchableOpacity key={fornecedor.id} style={styles.fornecedor}>
            <Text> {fornecedor.nome}</Text>
            <Image
              source={{ uri: fornecedor.imagem?.file }}
              style={styles.imagem}
            />
          </TouchableOpacity>
        ))}
        {fornecedores.map((fornecedor) => (
          // <List.Item key={fornecedor.id} title={fornecedor.descricao} />
          <TouchableOpacity key={fornecedor.id} style={styles.fornecedor}>
            <Text> {fornecedor.nome}</Text>
            <Image
              source={{ uri: fornecedor.imagem?.file }}
              style={styles.imagem}
            />
          </TouchableOpacity>
        ))}
        {fornecedores.map((fornecedor) => (
          // <List.Item key={fornecedor.id} title={fornecedor.descricao} />
          <TouchableOpacity key={fornecedor.id} style={styles.fornecedor}>
            <Text> {fornecedor.nome}</Text>
            <Image
              source={{ uri: fornecedor.imagem?.file }}
              style={styles.imagem}
            />
          </TouchableOpacity>
        ))}
        {fornecedores.map((fornecedor) => (
          // <List.Item key={fornecedor.id} title={fornecedor.descricao} />
          <TouchableOpacity key={fornecedor.id} style={styles.fornecedor}>
            <Text> {fornecedor.nome}</Text>
            <Image
              source={{ uri: fornecedor.imagem?.file }}
              style={styles.imagem}
            />
          </TouchableOpacity>
        ))}
      </View>
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
    fontWeight: "bold",
  },
  lista: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    flexDirection: "row",
    padding: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#1E90FF",
    borderRadius: 4,
    marginTop: 5,
    marginRight: 15,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 30,
    margin: 10,
  },
  info: {
    marginLeft: 15,
  },
  restauranteTitulo: {
    fontWeight: "bold",
    color: "#333",
  },
  descricao: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  estrela: {
    fontSize: 14,
    color: "#999",
  },
  categorias: {
    fontSize: 14,
    color: "#999",
  },
  distancia: {
    fontSize: 14,
    color: "#999",
  },
  atraso: {
    marginTop: 15,
    fontSize: 14,
    color: "#999",
  },
});
