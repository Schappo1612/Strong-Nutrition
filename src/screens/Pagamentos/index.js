import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function Pagamentos() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("pix");
  const [paymentDetails, setPaymentDetails] = useState({
    pix: "",
    boleto: "",
    cartao: {
      numero: "",
      nome: "",
      dataValidade: "",
      cvv: "",
    },
  });

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleInputChange = (name, value) => {
    if (selectedPaymentMethod === "cartao") {
      setPaymentDetails({
        ...paymentDetails,
        cartao: {
          ...paymentDetails.cartao,
          [name]: value,
        },
      });
    } else {
      setPaymentDetails({
        ...paymentDetails,
        [selectedPaymentMethod]: value,
      });
    }
  };

  const handleSubmit = () => {
    console.log("Detalhes do pagamento:", paymentDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Pagamento</Text>

      <View style={styles.paymentMethodPicker}>
        <Text>Selecione o Método de Pagamento:</Text>
        <Picker
          selectedValue={selectedPaymentMethod}
          onValueChange={(itemValue) => handlePaymentMethodChange(itemValue)}
        >
          <Picker.Item label="PIX" value="pix" />
          <Picker.Item label="Boleto" value="boleto" />
          <Picker.Item label="Cartão de Crédito" value="cartao" />
        </Picker>
      </View>

      {selectedPaymentMethod === "pix" && (
        <TextInput
          style={styles.input}
          placeholder="Chave PIX"
          value={paymentDetails.pix}
          onChangeText={(value) => handleInputChange("pix", value)}
        />
      )}

      {selectedPaymentMethod === "boleto" && (
        <TextInput
          style={styles.input}
          placeholder="Código de Barras do Boleto"
          value={paymentDetails.boleto}
          onChangeText={(value) => handleInputChange("boleto", value)}
        />
      )}

      {selectedPaymentMethod === "cartao" && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Número do Cartão"
            value={paymentDetails.cartao.numero}
            onChangeText={(value) => handleInputChange("numero", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome no Cartão"
            value={paymentDetails.cartao.nome}
            onChangeText={(value) => handleInputChange("nome", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Validade"
            value={paymentDetails.cartao.dataValidade}
            onChangeText={(value) => handleInputChange("dataValidade", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={paymentDetails.cartao.cvv}
            onChangeText={(value) => handleInputChange("cvv", value)}
          />
        </View>
      )}

      <Button title="Pagar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentMethodPicker: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
});
