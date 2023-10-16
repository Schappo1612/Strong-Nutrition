import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CupomDesconto() {
}

const styles = StyleSheet.create({
  cupom: {
    borderColor: '#1E90FF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 0,
    marginHorizontal: 20,
  },
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  info: {
    marginLeft: 10,
  },
  titulo: {
    fontWeight: 'bold',
  },
  validade: {
    marginTop: 5,
    color: '#999',
  },
});
