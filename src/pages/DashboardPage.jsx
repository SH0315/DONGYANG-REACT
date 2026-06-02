import { useState } from "react";

import { useOrders } from "../context/OrderContext";

import TrackerCard from "../components/Dashboard/TrackerCard";
import DashboardTabs from "../components/Dashboard/DashboardTabs";

function DashboardPage() {
  const { orders } = useOrders();

  const [currentTab, setCurrentTab] =
    useState("all");

  const filteredOrders = orders.filter(
    (order) => {
      if (currentTab === "all")
        return true;

      if (currentTab === "domestic")
        return !order.isInternational;

      if (
        currentTab === "international"
      )
        return order.isInternational;

      return true;
    }
  );

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
      }}
    >
      <h1>배송 현황 대시보드</h1>

      <DashboardTabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {filteredOrders.length === 0 ? (
        <h3>
          해당 조건의 주문이 없습니다.
        </h3>
      ) : (
        filteredOrders.map((order) => (
          <TrackerCard
            key={order.id}
            order={order}
          />
        ))
      )}
    </div>
  );
}

export default DashboardPage;