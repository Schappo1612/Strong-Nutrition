import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Busca from "./screens/Busca";
import Perfil from "./screens/Perfil";
import Pedidos from "./screens/Pedidos";
import PedidosAnteriores from "./screens/PedidosAnteriores";
import Pagamentos from "./screens/Pagamentos";
import Item from "./screens/Item";
import Login from "./screens/Login"

import { useRecoilValue } from "recoil";
import { userState } from "./recoil/atoms/auth";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function LoginRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
}

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen
        name="PedidosAnteriores"
        component={PedidosAnteriores}
        options={{ tabBarLabel: "Pedidos Anteriores" }}
      />
    </Tab.Navigator>
  );
}

function PerfilRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Pagamentos" component={Pagamentos} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  const currentuserState = useRecoilValue(userState);

  if (currentuserState.loggedIn) {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
          }}
        >
          <BottomTab.Screen
            name="PRS"
            component={HomeRoutes}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Busca"
            component={Busca}
            options={{
              tabBarLabel: "Busca",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="search" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="PedidosRouter"
            component={PedidosRouter}
            options={{
              tabBarLabel: "Pedidos",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="assignment" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="PerfilRoutes"
            component={PerfilRoutes}
            options={{
              headerShown: false,
              tabBarLabel: "Perfil",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#E06903",
            tabBarInactiveTintColor: "#fff",
            tabBarStyle: { backgroundColor: "black" },
          }}
        >
          <BottomTab.Screen
            name="Login"
            component={LoginRouter}
            options={{
              headerStyle: { backgroundColor: "black" },
              headerTitleStyle: {
                color: "white",
              },
              tabBarLabel: "Login",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}
