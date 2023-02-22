import { TouchableOpacity } from "react-native";

import { Center, useTheme } from "native-base";

import { Gradient } from "./Gradient";

type GradientSquareButtonProps = {
  children: React.ReactNode;
  isGradient?: boolean;
};

export function GradientSquareButton({
  isGradient = true,
  children,
}: GradientSquareButtonProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity>
      <Center
        shadow="5"
        w="46px"
        h="46px"
        padding="2"
        borderRadius="10px"
        bg="primary.50:alpha.9"
      >
        {isGradient ? <Gradient>{children}</Gradient> : children}
      </Center>
    </TouchableOpacity>
  );
}
