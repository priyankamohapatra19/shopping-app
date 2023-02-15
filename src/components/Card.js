import "./card.css";
import { useContext } from "react";
import cartContext from "./../context/CartContext";

const Card = ({ product, parent }) => {
  const ctx = useContext(cartContext);

  const addToBag = () => {
    ctx.cart(product.id, product, parent);
  };
  const addToWishlist = () => {
    ctx.wishList(product.id);
  };
  const handleRemove = (id) => {
    const remainingItem = ctx.list.filter((val) => {
      return val.id !== id;
    });
    ctx.setList(remainingItem);
    ctx.setWishlistCount(ctx.wishlistCount - 1);
  };
  return (
    <>
      <div className="card-container">
        <div className="prod-detail">
          <div className="row">
            <div className="col card prod-title">{product.title}</div>
          </div>
          <div className="row">
            <div className="col card prod-description">
              {product.description}
            </div>
          </div>
        </div>
        <div className="row card-button-container">
          <button className="add-btn" onClick={addToBag}>
            ADD TO BAG
          </button>
          {parent === "container" ? (
            <button
              disabled={ctx.list.find((val) => {
                return val.id === product.id;
              })}
              className="wishlist-btn"
              onClick={addToWishlist}
            >
              {ctx.list.find((val) => {
                return val.id === product.id;
              })
                ? "WISHLISTED"
                : "WISHLIST"}
            </button>
          ) : (
            <button
              className="remove-btn"
              onClick={() => handleRemove(product.id)}
            >
              REMOVE
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Card;
