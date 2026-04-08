import React, { createContext, useCallback, useContext, useState } from "react";

const OrderCheckoutContext = createContext(null);

export const OrderCheckoutProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const openOrder = useCallback((row) => {
    setProduct(row);
    setOpen(true);
  }, []);

  const closeOrder = useCallback(() => {
    setOpen(false);
    setTimeout(() => setProduct(null), 320);
  }, []);

  const value = { open, product, openOrder, closeOrder };

  return (
    <OrderCheckoutContext.Provider value={value}>
      {children}
    </OrderCheckoutContext.Provider>
  );
};

export const useOrderCheckout = () => {
  const ctx = useContext(OrderCheckoutContext);
  if (!ctx) {
    throw new Error("useOrderCheckout must be used within OrderCheckoutProvider");
  }
  return ctx;
};
