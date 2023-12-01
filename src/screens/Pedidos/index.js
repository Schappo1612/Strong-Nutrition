import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import compraService from "../../services/compras";

export default function Pedidos() {
  const [compras, setCompras] = useState([]);

  useEffect(async () => {
    const data = await compraService.getAllCompras();
    setCompras(data);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {compras.map((compra) => (
          <View key={compra.id} style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.title}>Compra ID: {compra.id}</Text>
              <Text>Usuário: {compra.usuario}</Text>
              <Text>Status: {compra.status}</Text>
            </View>
            {compra.itens.map((itens, index) => (
              <View key={index} style={styles.item}>
                <Image
                  source={{ uri: itens.categoria.imagem?.file }}
                  style={styles.image}
                />
                <View style={styles.itemInfo}>
                  <Text style={styles.title}>{itens.categoria.descricao}</Text>
                  <Text>Quantidade: {itens.quantidade}</Text>
                </View>
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
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  cartItem: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    resizeMode: "cover",
    height: 80,
    width: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
