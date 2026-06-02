import "./TimelineIndicator.css";

function TimelineIndicator({
  isInternational,
}) {
  const domesticSteps = [
    "배송지시",
    "수하물인수",
    "배송출발",
    "배송중",
    "배송완료",
  ];

  const internationalSteps = [
    "현지 물류센터",
    "출국 심사",
    "항공 운송",
    "입항 대기",
    "세관 통관",
    "국내 인계",
    "배송 완료",
  ];

  const steps = isInternational
    ? internationalSteps
    : domesticSteps;

  const currentStep = 2;

  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div
          key={index}
          className={
            index <= currentStep
              ? "step active"
              : "step"
          }
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default TimelineIndicator;