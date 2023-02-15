import { useState, useContext } from "react";
import cartContext from "../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const ctx = useContext(cartContext);

  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const decreaseQuantityHandler = () => {
    let newQuantity = itemQuantity - 1;
    let updatedCartList = ctx.cartList;
    if (newQuantity === 0) {
      updatedCartList = updatedCartList.filter((val) => {
        return val.id !== item.id;
      });
      ctx.setCartList(updatedCartList);
      ctx.setCount(ctx.count - 1);
    } else {
      setItemQuantity((q) => q - 1);
      updatedCartList.forEach((val) => {
        if (val.id === item.id) {
          val.quantity = newQuantity;
        }
      });
      ctx.setCartList(updatedCartList);
      ctx.setCount(ctx.count - 1);
    }
  };
  const increaseQuantityHandler = () => {
    let newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    let updatedCartList = ctx.cartList;
    updatedCartList.forEach((val) => {
      if (val.id === item.id) {
        val.quantity = newQuantity;
      }
    });
    ctx.setCartList(updatedCartList);
    ctx.setCount(ctx.count + 1);
  };
  return (
    <>
      <div className="cart-item-container">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-quantity">
          <button onClick={decreaseQuantityHandler}> - </button>
          <input className="input-container" type="text" value={itemQuantity} />
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
        <div className="cart-item-price">{item.quantity * item.price}</div>
      </div>
    </>
  );
};
export default CartItem;
