import "./App.css";
import './index.css';
import MainView from "./View/MainView/MainView";
import ModelsTshirtsView from "./View/ModelsTshirtView/ModelsTshirtsView";
import OrderView from "./View/OrderView/OrderView";
import PageInformation from "./View/PageInformation/PageInformation";
import ProductosView from "./View/ProductsView/ProductsView";
import QuotationView from "./View/QuotationView/QuotationView";
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
          <Route path="Quotation" element={<QuotationView/>}/>
          <Route path="Information" element={<PageInformation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
