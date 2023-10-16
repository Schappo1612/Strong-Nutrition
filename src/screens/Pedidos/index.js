import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";


import compraService from "../../services/compras";

export default function Pedidos() {
  const [compras, setCompras] = useState([]);
  const [compra, setCompra] = useState({});

  useEffect(async () => {
    const data = await compraService.getAllCompras();
    setCompras(data);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {compras.map((compra) => (
          <View key={compra.id} style={styles.compras}>
            <Text>
              <text>Compra id: {compra.id}</text>
              <text>usuario: {compra.usuario}</text>
              <text>Status: {compra.status}</text>
            </Text>
            {compra.itens.map((itens) => (
              <View style={styles.itens}>
                <Image
                  source={{ uri: itens.categoria.imagem?.file }}
                  style={styles.imagem}
                />
                <Text>
                  <text>{itens.categoria.descricao}</text>
                  <text>quantidade: {itens.quantidade}</text>
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imagem: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    borderWidth: 1,
  },
  compras: {
    borderWidth: 1,
    margin: 10,
    padding: 3,
  },
  itens: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    padding: 3,
    flexDirection: "row"
  },
});
