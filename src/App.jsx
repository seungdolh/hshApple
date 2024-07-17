import { Routes, Route } from "react-router-dom";
import Home from "@/views/Home";
import BestProductView from "@/views/BestProductView";
// import Cart from "./views/Cart";
// import Join from "./views/Join";
// import Products from "./views/Products";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bestProduct" element={<BestProductView />} />
        </Routes>
    );
}

export default App;
