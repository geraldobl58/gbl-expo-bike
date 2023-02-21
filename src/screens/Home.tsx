import { Box } from "native-base";
import { useEffect, useState } from "react";

import { DetailBackground } from "../atomic/atoms/DetailBackground";

import { Card } from "../atomic/molecules/Card";

import { MainBanner } from "../atomic/molecules/MainBanner";

import { CardProps } from "../dtos/CardDto";

import api from "../config/api";
import { FlatList } from "react-native";

export function Home() {
  const [equipments, setEquipments] = useState<CardProps[]>([]);

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
        ListHeaderComponent={() => <MainBanner />}
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
          />
        )}
      />
    </Box>
  );
}
