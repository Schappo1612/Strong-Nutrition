import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {RecoilRoot} from 'recoil';

import Routes from "./src/routes";

export default function App() {
  return (
    <RecoilRoot>
      <Fragment>
        <StatusBar style="auto" />
        <Routes />
      </Fragment>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E90FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
