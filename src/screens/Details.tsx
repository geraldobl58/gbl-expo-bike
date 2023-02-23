import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Box, Button, HStack, Image } from "native-base";

import { CardProps } from "../dtos/CardDto";

import api from "../config/api";

import rectangle from "../assets/img/rectangle.png";
import { ImagePreview } from "../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../atomic/atoms/ButtonDetail";

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
    <>
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

        <ImagePreview showDescription={false} image={equipment.image} />
      </Box>

      <Box
        bg="primary.100"
        justifyContent="center"
        p="7"
        borderRadius={30}
        shadow={5}
        h="110px"
      >
        <HStack w="100%" justifyContent="space-between">
          <ButtonDetail title="Desciption" />
          <ButtonDetail title="Especification" />
        </HStack>
      </Box>
    </>
  );
}
