import React, { useState } from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";

import { styles } from './styles';

import ilustacao from '../../assets/illustration.png'
import { ButtonIcon } from "../../Buttonicon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={ilustacao}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente {'\n'}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title={'Entrar com Discord'}
          activeOpacity={0.7}
           />
      
      </View>
    </View>
  );
}
