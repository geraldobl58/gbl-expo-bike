import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Box, Image, Text } from "native-base";

import { CardProps } from "../dtos/CardDto";

import api from "../config/api";

import rectangle from "../assets/img/rectangle.png";

type RouteProps = {
  itemId: string;
};

export function Details() {
  const [equipment, setEquipment] = useState<CardProps>({} as CardProps);

  const route = useRoute();
  const { itemId } = route.params as RouteProps;

  useEffect(() => {
    async function getEquipamentById() {
      try {
        const response = await api.get(`/equipments/${itemId}`);
        setEquipment(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getEquipamentById();
  }, []);

  return (
    <SafeAreaView>
      <Box
        flex="1"
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          source={rectangle}
          alt="image"
          position="absolute"
          top="-50"
          right="0"
          bottom="0"
        />
      </Box>
    </SafeAreaView>
  );
}
