import React from "react";
import { TouchableOpacity, View } from "react-native";
import Styles from "./Styles";

const PrimaryButton = () => {
  return (
    <TouchableOpacity style={Styles.buttonPrimary}>
      <View>Button</View>
    </TouchableOpacity>
  );
};

const OutlinedButton = () => {
  return (
    <TouchableOpacity style={Styles.buttonOutlined}>
      <View>Button</View>
    </TouchableOpacity>
  );
};

export { PrimaryButton, OutlinedButton };
