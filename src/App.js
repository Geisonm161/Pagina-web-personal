import { Suspense, lazy } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
const ModelsTshirtsView = lazy(() => import( "./View/ModelsTshirtView/ModelsTshirtsView"));
const OrderView = lazy(() => import( "./View/OrderView/OrderView"));
const PageInformation = lazy(() => import( "./View/PageInformation/PageInformation"));
const ProductosView = lazy(() => import( "./View/ProductsView/ProductsView"));
const QuotationView = lazy(() => import( "./View/QuotationView/QuotationView"));
const ShowTshirtView = lazy(() => import( "./View/ShowTshirtView/ShowTshirtView"));
const MainView = lazy(() => import( "./View/MainView/MainView"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Landing />}>
          <Routes>
            <Route index element={<MainView />} />
            <Route path="Products" element={<ProductosView />} />
            <Route path="Models" element={<ModelsTshirtsView />} />
            <Route path="Models/:Article" element={<ShowTshirtView />} />
            <Route path="Order" element={<OrderView />} />
            <Route path="Quotation" element={<QuotationView />} />
            <Route path="Information" element={<PageInformation />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
