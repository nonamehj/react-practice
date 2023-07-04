import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Error, Home } from "./pages";
import SharedLayoutHome from "./pages/SharedLayoutHome";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayoutHome />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
