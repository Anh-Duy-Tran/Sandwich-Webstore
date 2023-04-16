import { StoreProvider } from "./context/StoreProvider";
import { ProductPage } from "./pages/product-page/ProductPage";
import { StoreFront } from "./pages/store-front/StoreFront";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Router>

          <Route path="/" element={ <StoreFront/> }/>

          <Route path="/sandwich/:id" element={ <ProductPage/>}/>
          
        </Router>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
