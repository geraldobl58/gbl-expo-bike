import { Box, Center, HStack, ScrollView, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../atomic/molecules/Header";
import { CartItem } from "../atomic/atoms/CartItem";
import { SectionFooterCart } from "../atomic/molecules/SectionFooterCart";

export function Cart() {
  const { goBack } = useNavigation();

  return (
    <Box p="20px" flex="1" justifyContent="space-between">
      <Box h="68%">
        <Box mt="-20px">
          <Header
            text="Meu carrinho"
            inverted
            type="goBack"
            handlePress={goBack}
          />
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          {[1, 2, 3].map((item, index) => (
            <CartItem
              key={index}
              image="https://i.imgur.com/zjgFbOM.png"
              title="Bike"
              price="95451321"
              amount="1"
            />
          ))}
        </ScrollView>
      </Box>

      <Box mb="50px">
        <SectionFooterCart title="Subtotal" value="200" />
        <SectionFooterCart title="Entrega" value="0" />
        <SectionFooterCart title="Total" value="2000" />

        <Center mt="5px">
          <Box
            w="140px"
            h="40px"
            bg="primary.50"
            justifyContent="center"
            borderRadius="8px"
          >
            <Text zIndex="-1" color="white" left="50px" position="absolute">
              Finalizar
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
