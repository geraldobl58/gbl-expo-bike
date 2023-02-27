import { Box, Icon, Text } from "native-base";

import { AntDesign } from "@expo/vector-icons";

import { SquareButton } from "../../atoms/SquareButton";

type HeaderProps = {
  text: string;
  inverted?: boolean;
  type?: "goBack" | "default" | "down";
  handlePress: () => void;
};

export function Header({
  text,
  inverted = false,
  type = "default",
  handlePress,
}: HeaderProps) {
  const iconModifier = {
    default: "search1",
    goBack: "left",
    down: "down",
  };

  return (
    <Box
      h="100px"
      alignItems="center"
      mt="26"
      flexDirection="row"
      justifyContent={inverted ? "flex-start" : "space-between"}
    >
      {!inverted && (
        <Text fontSize="lg" fontWeight="bold" color="white">
          {text}
        </Text>
      )}

      <SquareButton onPress={handlePress}>
        <Icon as={AntDesign} name={iconModifier[type]} color="white" />
      </SquareButton>

      {inverted && (
        <Text fontSize="lg" ml="56px" fontWeight="bold" color="white">
          {text}
        </Text>
      )}
    </Box>
  );
}
