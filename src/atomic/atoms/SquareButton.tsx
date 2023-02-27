import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Center } from "native-base";

import { Gradient } from "./Gradient";

type SquareButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  isGradient?: boolean;
};

export function SquareButton({
  isGradient = true,
  children,
  ...rest
}: SquareButtonProps) {
  return (
    <TouchableOpacity {...rest}>
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
