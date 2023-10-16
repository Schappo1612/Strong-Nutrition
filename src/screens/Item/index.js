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
} from "react-native";
import { TouchableOpacity } from "react-native-web";

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
      <View style={styles.container1}>
        <Text>{item.descricao}</Text>
      </View>
      <View style={styles.container2}>
        <Image style={styles.itemImage} source={{ uri: item.imagem?.url }} />
      </View>
      <View style={styles.container3}>
        <TouchableOpacity style = {styles.comprar} onPress={adicionar}>Comprar</TouchableOpacity>
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
    flexDirection: "row",
  },
  itemImage: {
    resizeMode: "contain",
    height: "90%",
    borderRadius: 5,
    backgroundColor: "",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  container2: {
    flex: 2,
    justifyContent: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  comprar:{
    backgroundColor: "green",
    color: "white",
    padding: 3,
    borderColor: "black",
    border: 2,
    borderRadius: 90,
  },
  input: {
    width: "64%",
    borderColor: "black",
    border: 1,
  },
});
