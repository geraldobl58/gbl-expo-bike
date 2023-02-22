import { Box, Icon, Text } from "native-base";

import { AntDesign } from "@expo/vector-icons";

import { SquareButton } from "../../atoms/SquareButton";

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
      <SquareButton>
        <Icon as={AntDesign} name="search1" color="white" />
      </SquareButton>
    </Box>
  );
}
