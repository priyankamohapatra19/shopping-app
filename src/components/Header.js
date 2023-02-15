import "./header.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import cartContext from "./../context/CartContext";

const Header = () => {
  const ctx = useContext(cartContext);

  const navigate = useNavigate();
  const handleWishlist = () => {
    navigate("/wishlist");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const logoHandler = () => {
    navigate("/");
  };
  return (
    <div className="header-container">
      <div className="title" onClick={logoHandler}>
        <p>My Shopping App</p>
      </div>
      <div className="button-container">
        <div>
          <button className="wishlist-header-btn" onClick={handleWishlist}>
            Wishlist{" "}
            <span
              className={`${
                ctx.wishlistCount === 0 ? "hide-cart-number" : "cart-number"
              }`}
            >
              {ctx.wishlistCount}
            </span>
          </button>
        </div>
        <div>
          <button className="cart-btn" onClick={handleCart}>
            Cart{" "}
            <span
              className={`${
                ctx.count === 0 ? "hide-cart-number" : "cart-number"
              }`}
            >
              {ctx.count}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
