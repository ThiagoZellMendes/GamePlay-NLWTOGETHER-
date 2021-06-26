import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider"
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { Member } from "../../components/Member";
import BannerImg from "../../assets/banner.png";

export function AppointmentDetails() {

  const members =[
    {
      id: '1',
      username: 'Thiago',
      avatar_url: 'https://github.com/ThiagoZellMendes.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Jack',
      avatar_url: 'https://github.com/ThiagoZellMendes.png',
      status: 'offline'
    }
  ]
  return (
    <Background>
      <Header
        title="Detalhes"
        actions={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma na md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList 
        data={ members }
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
    </Background>
  );
}
