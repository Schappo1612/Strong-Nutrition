import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Text, Button, List } from "react-native-paper";

import categoriaService from "../../services/categorias";

export default function Categorias({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    const data = await categoriaService.getAllCategorias();
    setCategorias(data);
  };

  useEffect(async () => {
    getCategorias();
  }, []);

  const updateCategorias = async () => {
    await getCategorias();
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.titulo}>Categorias</Text>
      </View> */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {categorias.map((categoria) => (
          <TouchableOpacity
            key={categoria.id}
            style={styles.categorias}
            onPress={() => navigation.navigate("Item", { item: categoria })}
          >
            <Image
              source={{ uri: categoria.imagem?.url }}
              style={styles.imagem}
              />
              <Text> {categoria.descricao}</Text>
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
    fontSize: 13,
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
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  categoriaTitulo: {
    fontSize: 16,
    marginTop: 10,
    color: "#999",
  },
  categorias: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
});
