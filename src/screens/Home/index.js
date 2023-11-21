import React from "react";

import { ScrollView, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Categorias from "../../components/Home/Categorias";
import Fornecedores from "../../components/Home/Fornecedores";

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Categorias navigation={navigation}/>
      <Fornecedores />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: '#D9D9D9',
  },
});
