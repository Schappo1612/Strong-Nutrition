import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Stack,
  TextInput,
  TouchableOpacity
} from "react-native";

import comprasService from "../../services/compras";

export default function Item({ route, navigation }) {
  const [compras, setCompras] = useState([]);
  const [compra, setCompra] = useState({});

  useEffect(async () => {
    const data = await comprasService.getAllCompras();
    setCompras(data);
  }, 
  []);

  async function adicionar() {
    if (compra.id) {
      await comprasService.updateCompra(compra);
    } else {
      await comprasService.saveCompra(compra);
    }
    setCompras({});
  }

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image style={styles.itemImage} source={{ uri: item.imagem?.url }} />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text12}>{item.descricao}</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.preco12}>R$40,00</Text>
        <TouchableOpacity style = {styles.comprar} onPress={adicionar}>
          <Text>
          Comprar
          </Text>
        </TouchableOpacity>
        <Text>Quantidade:</Text>
          <TextInput
            style={styles.input}
            // value={compra.itens.quantidade}
            // onChangeText={(text) => setCompra({ ...compra, quantidade: text })}
            placeholder="1"
            keyboardType="numeric"
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Alterado para column para melhorar o layout
    padding: 16,
  },
  itemImage: {
    resizeMode: "contain",
    height: 200, // Altura fixa para uma melhor proporção
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 16,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Centraliza o texto verticalmente
  },
  text12:{
    fontSize: 30,
  },

  preco12:{
    fontSize:30,
    marginTop:16,
    marginBottom:16,
  },

  container2: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16, // Adiciona espaçamento no topo
  },
  comprar: {
    backgroundColor: "#4CAF50",
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#2E8B57",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40, // Altura ajustada para melhor proporção
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    textAlign: "center", // Centraliza o texto na entrada de texto
    marginTop: 8, // Adiciona espaçamento acima da entrada de texto
  },
});