import Header from "./Header";
import Container from "./Container";

const Home = ({ products, cart, wishList, count, wishlistCount, list }) => {
  return (
    <div>
      <div className="header">
        <Header count={count} wishlistCount={wishlistCount} list={list} />
      </div>
      <div className="app-container">
        <Container
          products={products}
          cart={cart}
          wishList={wishList}
          list={list}
        />
      </div>
    </div>
  );
};
export default Home;
