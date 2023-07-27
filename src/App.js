import "./App.css";
import './index.css';
import MainView from "./View/MainView/MainView";
import ModelsTshirtsView from "./View/ModelsTshirtView/ModelsTshirtsView";
import OrderView from "./View/OrderView/OrderView";
import ProductosView from "./View/ProductsView/ProductsView";
import ShowTshirtView from "./View/ShowTshirtView/ShowTshirtView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainView />} />
          <Route path="Products" element={<ProductosView />} />
          <Route path="Models" element={<ModelsTshirtsView />} />
          <Route path="Models/:Article" element={<ShowTshirtView />} />
          <Route path="Order" element={<OrderView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
