import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Base from "./Components/Layout/Base";
import CardOverview from "./Pages/CardOverview";
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/overview" element={<CardOverview />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
