import { Icon, useToast } from "native-base";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import styles from "../../../styles/styles.js";
const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableLogin, setDisableLogin] = useState(true);
  const toast = useToast()

  const onPress = () => {
    let title = '';
    (email === 'test@gorillalogic.com') ? title = "You're logged in!" : title = 'Invalid credentials';
    toast.show({
      title: title,
    })
  };

  useEffect(() => {
      validateCredentialInputs();
  }, [email, password]);

  const validateCredentialInputs = () => {
    (email.trim() && password.trim()) ? setDisableLogin(false) : setDisableLogin(true);
  };

  const toggleLoginButton = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/app_logo.png")}
      />
      <Text style={styles.label}>Email</Text>
      <View style={styles.iconInputContainer}>
        <Image
          source={require("../../../assets/email_icon.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.iconInputContainer}>
        <Image
          source={require("../../../assets/lock_icon.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <Pressable
        style={disableLogin ? styles.disabledButton : styles.loginButton}
        onPress={onPress}
        disabled={disableLogin}
      >
        <Text style={disableLogin ? styles.disabledLoginText : styles.loginText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
