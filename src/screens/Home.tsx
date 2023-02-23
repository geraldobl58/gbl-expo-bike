import { useEffect, useState } from "react";

import { FlatList } from "react-native";

import { Box } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { DetailBackground } from "../atomic/atoms/DetailBackground";

import { Card } from "../atomic/molecules/Card";

import { MainBanner } from "../atomic/molecules/MainBanner";

import { Header } from "../atomic/molecules/Header";

import { CategoryList } from "../atomic/organism/CategoryList";

import { CardProps } from "../dtos/CardDto";

import api from "../config/api";

export function Home() {
  const { navigate } = useNavigation();

  const [equipments, setEquipments] = useState<CardProps[]>([]);

  function handleRedirect(id: string) {
    navigate("Details", {
      itemId: id,
    });
  }

  useEffect(() => {
    async function getEquipments() {
      try {
        const { data } = await api.get("equipments");
        setEquipments(data);
      } catch (error) {
        console.log(error);
      }
    }

    getEquipments();
  }, []);

  return (
    <Box flex="1" padding="20px" pt="-10px" position="relative">
      <DetailBackground />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Header text="Choose Your Bike" />
            <MainBanner />
            <CategoryList />
          </>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={equipments}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
            model={item.model}
            price={item.price}
            onPress={() => handleRedirect(item.id)}
          />
        )}
      />
    </Box>
  );
}
