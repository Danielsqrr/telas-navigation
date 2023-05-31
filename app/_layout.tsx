import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function App() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Principal",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "telaA",
          title: "bem-vindo tela A",
        }}
      />
      <Drawer.Screen
        name="telaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "telab",
          title: "bem-vindo tela B",
        }}
      />
    </Drawer>
);
}