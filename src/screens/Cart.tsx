import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { Header } from "../atomic/molecules/Header";
import { CartItem } from "../atomic/atoms/CartItem";
import { SectionFooterCart } from "../atomic/molecules/SectionFooterCart";
import { SwipeableButton } from "../atomic/molecules/SwipeableButton";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const { goBack } = useNavigation();

  const { items } = useCart();

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
          {items.map((item, index) => (
            <CartItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              amount={item.price}
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
            <SwipeableButton
              handleSwipe={() => alert("Aqui")}
              leftAction={
                <Box
                  w="140px"
                  justifyContent="center"
                  bg="primary.50"
                  borderRadius="8px"
                />
              }
            >
              <Button
                w="40px"
                height="40px"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={AntDesign} name="right" color="white" />
              </Button>
            </SwipeableButton>

            <Text zIndex="-1" color="white" left="50px" position="absolute">
              Finalizar
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
