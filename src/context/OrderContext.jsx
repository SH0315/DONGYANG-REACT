import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // 주문 추가
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  // 주문 삭제
  const removeOrder = (id) => {
    setOrders((prev) =>
      prev.filter((order) => order.id !== id)
    );
  };

  // 주문 상태 업데이트
  const updateOrderStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        removeOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrderContext);
};