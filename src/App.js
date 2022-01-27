import Header from "./components/Header";
import Product from "./pages/Product";
import CartPreview from "./components/CartPreview/CartPreview";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <Product/>
        <CartPreview/>
    </div>
  );
}

export default App;
