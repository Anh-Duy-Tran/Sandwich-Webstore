import { StoreProvider } from "./context/StoreProvider";
import { StoreFront } from "./pages/store-front/StoreFront";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Router>

          <Route path="/" element={ <StoreFront/> }/>
          {/* <Route path="/products/:id" element={ <StoreFront/>}/> */}
          
        </Router>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
