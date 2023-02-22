import { Box, HStack, Image, Text } from "native-base";

import { SquareButton } from "../../atoms/SquareButton";

import bike from "../../../assets/img/categories/subtract.png";
import road from "../../../assets/img/categories/road.png";
import helmet from "../../../assets/img/categories/helmet.png";
import mountain from "../../../assets/img/categories/mountain.png";

export function CategoryList() {
  return (
    <Box
      mb="20px"
      mt="5px"
      w="100%"
      alignSelf="center"
      justifyContent="space-between"
    >
      <HStack justifyContent="space-between" width="95px">
        <Box ml="25px">
          <SquareButton isGradient>
            <Text color="white">All</Text>
          </SquareButton>
        </Box>

        <Box ml="25px" mt="-10px">
          <SquareButton isGradient={false}>
            <Image source={bike} alt="bike" resizeMode="contain" />
          </SquareButton>
        </Box>

        <Box ml="25px" mt="-20px">
          <SquareButton isGradient={false}>
            <Image source={road} alt="bike" resizeMode="contain" />
          </SquareButton>
        </Box>

        <Box ml="25px" mt="-30px">
          <SquareButton isGradient={false}>
            <Image source={helmet} alt="bike" resizeMode="contain" />
          </SquareButton>
        </Box>

        <Box ml="25px" mt="-40px">
          <SquareButton isGradient={false}>
            <Image source={mountain} alt="bike" resizeMode="contain" />
          </SquareButton>
        </Box>
      </HStack>
    </Box>
  );
}
