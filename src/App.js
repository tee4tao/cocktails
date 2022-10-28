import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { About } from "./About";
import { Error } from "./Error";
import { Cocktail } from "./cocktail";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cocktail/:id" element={<Cocktail />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
