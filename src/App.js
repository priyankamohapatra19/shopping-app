import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import WishList from "./components/Wishlist";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { products } from "./dummy";
import cartContext from "./context/CartContext";

export default function App() {
  const [count, setCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [list, setList] = useState([]);
  const [cartList, setCartList] = useState([]);

  const cart = (id, product, parent) => {
    setCount(count + 1);

    // if the item is present in the cart already
    const isAvailable = cartList.filter((prod) => prod.id === id).length > 0;

    // if present quantity will increase by 1
    if (isAvailable) {
      const updatedCartList = [...cartList];
      updatedCartList.forEach((prod) => {
        if (prod.id === id) {
          prod.quantity += 1;
        }
      });

      // if item is added from wishlist then remove the item from wishlist
      if (parent === "wishlist") {
        setWishlistCount(wishlistCount - 1);
        const filteredWishlist = list.filter((prod) => prod.id !== id);
        setList(filteredWishlist);
      }
      setCartList(updatedCartList);
      console.log("if wala");
    } else {
      // else will add the prodcut with quantity 1
      const updatedCartList = [...cartList];
      updatedCartList.push({ ...product, quantity: 1 });
      setCartList(updatedCartList);
      console.log("else wala");
      // if item is added from wishlist then remove the item from wishlist
      if (parent === "wishlist") {
        setWishlistCount(wishlistCount - 1);
        const filteredWishlist = list.filter((prod) => prod.id !== id);
        setList(filteredWishlist);
      }
    }
  };

  const wishList = (id) => {
    setWishlistCount(wishlistCount + 1);
    const newArr = [...list];
    const filterList = products.find((product) => {
      return product.id === id;
    });
    newArr.push(filterList);
    setList(newArr);
  };
  const data = {
    products,
    count,
    setCount,
    wishlistCount,
    setWishlistCount,
    list,
    setList,
    cartList,
    setCartList,
    cart,
    wishList
  };

  return (
    <>
      <cartContext.Provider value={data}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </cartContext.Provider>
    </>
  );
}
