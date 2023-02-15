import Header from "./Header";
import "./Checkout.css";
import { useContext } from "react";
import cartContext from "../context/CartContext";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout">
        <p className="order-text">Your order has been successfully placed!</p>
        <p className="thanks-text">
          Thank you for shopping with us{" "}
          <span role="img" aria-label="sheep">
            😊
          </span>
        </p>
      </div>
    </>
  );
};
export default Checkout;
