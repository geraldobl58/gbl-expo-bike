import { createContext } from "react";

type CartItem = {
  image: string;
  title: string;
  price: string;
  amount: string;
  subtotal: string;
};

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextData = {
  items: CartItem[];
};

const CartContextDefaultValues = {
  items: [],
};

// remove
const mock = [
  {
    title: "PEUGEOT",
    amount: "2",
    image: "https://i.imgur.com/zjgFbOM.png",
    price: "300",
    subtotal: "400",
  },
  {
    title: "PEUGEOT OLD",
    amount: "2",
    image: "https://i.imgur.com/zjgFbOM.png",
    price: "400",
    subtotal: "500",
  },
];

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  return (
    <CartContext.Provider value={{ items: mock }}>
      {children}
    </CartContext.Provider>
  );
};
