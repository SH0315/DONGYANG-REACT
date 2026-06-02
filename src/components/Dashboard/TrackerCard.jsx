import "./TrackerCard.css";
import TimelineIndicator from "./TimelineIndicator";

function TrackerCard({ order }) {
  return (
    <div className="tracker-card">
      <div className="tracker-header">
        <div>
          <h3>{order.productName}</h3>

          <p>
            {order.isInternational
              ? "✈️ 해외 직구"
              : "🚚 국내 배송"}
          </p>
        </div>

        <span className="status-badge">
          {order.status}
        </span>
      </div>

      <div className="tracker-body">
        <p>
          <strong>수령인 :</strong>
          {order.recipient}
        </p>

        <p>
          <strong>운송장 :</strong>
          {order.trackingNumber}
        </p>

        <p>
          <strong>주소 :</strong>
          {order.address}
        </p>
      </div>

      <TimelineIndicator
        isInternational={order.isInternational}
      />
    </div>
  );
}

export default TrackerCard;