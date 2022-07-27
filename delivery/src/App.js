import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import Product from "./components/Product";
import data from "./data";
import { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
<BrowserRouter>
  <Switch>
    <Route path="/mpage" component={Main} />
    <Route path="/hpage" component={Header} />
    <Route path="/ppage" component={Product} />
    <Route path="/page" component={Basket} />
  </Switch>
</BrowserRouter>;
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  //Fetching Data
  const handleAddItem = () => {
    fetch("http://localhost:3007/FoodItem", {
      method: "POST",
      body: JSON.stringify({ cartItems: false }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then((dt) => {
        alert("Item inserted successfully");
      });
  };

  const removeProduct = async (id) => {
    console.log(id);

    fetch("http://localhost:3007/FoodItem/RemoveFoodItem:id" + id, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then((dt) => {
        alert("Item deleted successfully");
      });
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
