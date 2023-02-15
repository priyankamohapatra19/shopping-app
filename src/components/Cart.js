import CartItem from "./CartItem";
import Header from "./Header";
import "./Cart.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../context/CartContext";

const Cart = () => {
  const ctx = useContext(cartContext);
  const navigate = useNavigate();
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    ctx.cartList.forEach((val) => {
      let addition = val.quantity * val.price;
      sum = sum + addition;
    });
    setGrandTotal(sum);
  }, [ctx.cartList, ctx.count]);

  const handleCheckout = () => {
    navigate("/checkout");
    ctx.setCartList([]);
    ctx.setCount(0);
  };
  return (
    <div className="cart-container">
      <Header count={ctx.count} wishlistCount={ctx.wishlistCount} />
      <div className="cart-title">
        <h1>CART!</h1>
        {ctx.cartList.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {ctx.cartList.length > 0 && (
        <div className="checkout-container">
          <div>
            <button className="proceed-button" onClick={handleCheckout}>
              PROCEED TO BUY
            </button>
          </div>
          <div className="total-text-cart">
            <b>Total:</b> <span>{grandTotal}</span>
          </div>
        </div>
      )}
      {ctx.cartList.length === 0 && (
        <div className="wishlist-text"> Your cart is empty!</div>
      )}
    </div>
  );
};
export default Cart;
