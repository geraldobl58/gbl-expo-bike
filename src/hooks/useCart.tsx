import { useContext } from "react";

import { CartContext } from "../contexts/Cart";

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
