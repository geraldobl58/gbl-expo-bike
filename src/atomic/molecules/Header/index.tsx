import { Box, Icon, Text } from "native-base";

import { AntDesign } from "@expo/vector-icons";

import { GradientSquareButton } from "../../atoms/GradientSquareButton";

type HeaderProps = {
  text: string;
};

export function Header({ text }: HeaderProps) {
  return (
    <Box
      h="100px"
      alignItems="center"
      mt="26"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Text fontSize="lg" fontWeight="bold" color="white">
        {text}
      </Text>
      <GradientSquareButton>
        <Icon as={AntDesign} name="search1" color="white" />
      </GradientSquareButton>
    </Box>
  );
}
