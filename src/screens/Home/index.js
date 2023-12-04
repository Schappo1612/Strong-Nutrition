import React from "react";

import { Text, ScrollView, Image, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Categorias from "../../components/Home/Categorias";
import Fornecedores from "../../components/Home/Fornecedores";
import Produtos from "../../components/Home/Produtos";

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('../../../assets/academia.png')}
      />
      <Categorias navigation={navigation} />
      <Fornecedores />
      <Produtos navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#D9D9D9",
  },
  imagem: {
    width: 600, 
    height: 200,
  },
});
