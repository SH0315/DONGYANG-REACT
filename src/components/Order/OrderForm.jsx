import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../../context/OrderContext";

import "./OrderForm.css";

function OrderForm() {
  const navigate = useNavigate();
  const { addOrder } = useOrders();

  const [productName, setProductName] = useState("");
  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [isInternational, setIsInternational] =
    useState(false);

  const [customsCode, setCustomsCode] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productName ||
      !recipient ||
      !phone ||
      !address
    ) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    if (
      isInternational &&
      customsCode.trim() === ""
    ) {
      alert("개인통관고유부호를 입력해주세요.");
      return;
    }

    const trackingNumber = isInternational
      ? `DHL${Math.floor(
          Math.random() * 1000000
        )}`
      : `CJ${Math.floor(
          Math.random() * 1000000
        )}`;

    const order = {
      id: Date.now(),

      productName,
      recipient,
      phone,
      address,

      isInternational,

      customsCode,

      trackingNumber,

      status: "접수완료",
    };

    addOrder(order);

    alert("주문이 완료되었습니다.");

    navigate("/dashboard");
  };

  return (
    <div className="order-form-container">
      <h1>배송 주문</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>상품명</label>

          <input
            type="text"
            value={productName}
            onChange={(e) =>
              setProductName(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>수령인</label>

          <input
            type="text"
            value={recipient}
            onChange={(e) =>
              setRecipient(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>연락처</label>

          <input
            type="text"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>배송지</label>

          <input
            type="text"
            value={address}
            placeholder="주소 입력"
            onChange={(e) =>
              setAddress(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>배송 유형</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                checked={!isInternational}
                onChange={() =>
                  setIsInternational(false)
                }
              />
              국내 배송
            </label>

            <label>
              <input
                type="radio"
                checked={isInternational}
                onChange={() =>
                  setIsInternational(true)
                }
              />
              해외 직구
            </label>
          </div>
        </div>

        {isInternational && (
          <div className="form-group">
            <label>
              개인통관고유부호
            </label>

            <input
              type="text"
              placeholder="P123456789012"
              value={customsCode}
              onChange={(e) =>
                setCustomsCode(
                  e.target.value
                )
              }
            />
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
        >
          주문하기
        </button>
      </form>
    </div>
  );
}

export default OrderForm;