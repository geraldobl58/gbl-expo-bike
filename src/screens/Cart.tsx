import { Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../atomic/molecules/Header";
import { CartItem } from "../atomic/atoms/CartItem";

export function Cart() {
  const { goBack } = useNavigation();

  return (
    <Box p="20px" flex="1">
      <Box mt="-20px">
        <Header
          text="Meu carrinho"
          inverted
          type="goBack"
          handlePress={goBack}
        />
      </Box>

      <CartItem
        image="https://i.imgur.com/zjgFbOM.png"
        title="Bike"
        price="95451321"
        amount="1"
      />
    </Box>
  );
}
