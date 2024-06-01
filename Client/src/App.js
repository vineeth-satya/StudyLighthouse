// import "./App.css";
import "./index.css";
import Lander from "./pages/Lander/lander.js";
import Editprofile from "./pages/editprofile.js";
import Profile from "./pages/profile.js"
import Friendprofile from "./pages/friendprofile.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Lander />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friendprofile" element={<Friendprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
