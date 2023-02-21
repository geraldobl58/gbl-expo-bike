import { TouchableOpacity } from "react-native";

import { Box, Image, Text } from "native-base";

import { CardProps } from "../../../dtos/CardDto";
import { TextAlpha50 } from "../../atoms/TextAlpha50";

export function Card({ id, title, image, model, price }: CardProps) {
  return (
    <TouchableOpacity
      style={{ padding: 5, width: "50%", height: 240, opacity: 0.9 }}
      onPress={() => {}}
    >
      <Box
        borderRadius="20px"
        p="4"
        flex="1"
        justifyContent="center"
        alignItems="center"
        shadow="5"
        bg="primary.50:alpha.9"
      >
        <Box>
          <Image
            src={image}
            width="121px"
            h="80px"
            alt="image"
            resizeMode="contain"
          />
          <Box mt="17px">
            <TextAlpha50 text={title} />

            <Text fontSize="md" bold color="white">
              {model}
            </Text>
            <TextAlpha50 text={`${price}`} />
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
