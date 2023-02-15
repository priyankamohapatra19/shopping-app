import { useContext } from "react";
import Card from "./Card";
import Header from "./Header";
import "./wishlist.css";
import cartContext from "../context/CartContext";

const WishList = () => {
  const ctx = useContext(cartContext);
  return (
    <>
      <div>
        <Header count={ctx.count} wishlistCount={ctx.wishlistCount} />
      </div>
      <div className="wishlist-container">
        {ctx.list.map((val) => {
          return <Card parent="wishlist" product={val} />;
        })}
        {ctx.list.length === 0 && (
          <div className="wishlist-text">Your wishlist is empty!</div>
        )}
      </div>
    </>
  );
};
export default WishList;
