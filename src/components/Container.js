import { useContext } from "react";
import Card from "./Card";
import "./container.css";
import cartContext from "../context/CartContext";

const Container = () => {
  const ctx = useContext(cartContext);

  return (
    <div className="container">
      {ctx.products.map((product) => {
        return <Card key={product.id} product={product} parent="container" />;
      })}
    </div>
  );
};
export default Container;
