// import "./App.css";
// import "./index.css";
import Lander from "./pages/Lander/lander.js";
import "./pages/Lander/lander.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Lander />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
