import Navbar from "../../components/navbar";
import "./Payment.css";
import { CreditCard } from "phosphor-react";
import PromptPay from "../../assets/PromptPay.png";

function Payment() {
  return (
    <>
      <Navbar />
      <section className="container">
        <section id="Payment">
          <div className="checkout">
            <p>Checkout</p>
          </div>
          <div className="payment-method">
            <p>Payment method</p>
          </div>
          <div className="cerdit-card">
            <button>
              <CreditCard size={48} />
              Cerdit/Debit Card
            </button>
            <button>
              <img src={PromptPay} alt="PromptPay" width={213} height={37} />
            </button>
          </div>
          <div className="mini-text">
            <p>Card Infomation</p>
          </div>
          <div className="long-input">
            <input />
          </div>
          <div className="short-input">
            <input />
            <input />
          </div>
          <div className="mini-text">
            <p>Name on card</p>
          </div>
          <div className="long-input">
            <input />
          </div>
          <div className="payment-method">
            <p>Order detalis</p>
          </div>
          <div className="mini-img">
            <img src="https:/via.placeholder.com/50x50" alt="placeholder" />
            <p>Course name</p>
            <p className="price">THB 0,000.00</p>
          </div>
        </section>
        <section id="Summary">
          <div className="summary">
            <p>Summary</p>
          </div>
          <div className="og-price">
            <p>Original Price:</p>
            <p className="price">THB 0,000.00</p>
          </div>
          <div className="horizontal-line" />
          <div className="total">
            <p>Total:</p>
            <p className="price">THB 0,000.00</p>
          </div>
          <div className="complete-checkout">
            <button>
              <p>Complete Checkout</p>
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Payment;
