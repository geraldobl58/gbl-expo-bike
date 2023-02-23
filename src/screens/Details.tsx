import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Box, Button, HStack, Image, Text } from "native-base";

import { CardProps } from "../dtos/CardDto";

import api from "../config/api";

import { ImagePreview } from "../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../atomic/atoms/ButtonDetail";

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

      {false ? (
        <Box
          bg="primary.100"
          justifyContent="center"
          p="7"
          borderRadius={30}
          shadow={5}
          h="110px"
        >
          <HStack w="100%" justifyContent="space-between">
            <ButtonDetail title="Descrição" />
            <ButtonDetail title="Especificação" />
          </HStack>
        </Box>
      ) : (
        <Box bg="primary.100" borderTopRadius={30} shadow={5} h="440px">
          <Box pl="7" p="7" pt="7">
            <HStack w="100%" justifyContent="space-between">
              <ButtonDetail title="Descrição" />
              <ButtonDetail title="Especificação" />
            </HStack>

            <Box mt="30">
              <Text bold color="white" fontSize="17">
                {equipment.title}
              </Text>

              <Text color="white" opacity="0.6" mt="8">
                Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare
                consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
                felis.Copo furadis é disculpa de bebadis, arcu quam euismod
                magna.Per aumento de cachacis, eu reclamis.Praesent vel viverra
                nisi. Mauris aliquet nunc non turpis scelerisque, eget.
              </Text>
            </Box>
          </Box>

          <HStack
            bg="primary.200"
            borderTopRadius={30}
            justifyContent="space-between"
            shadow={5}
            h={100}
            w="100%"
            alignItems="center"
            p="7"
          >
            <Text bold color="ocean.200" fontSize="17">
              {equipment.price}
            </Text>

            <Button
              w="149"
              h="43"
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
              shadow="5"
              bg="ocean.200"
              onPress={() => {}}
            >
              Adicionar
            </Button>
          </HStack>
        </Box>
      )}
    </>
  );
}
