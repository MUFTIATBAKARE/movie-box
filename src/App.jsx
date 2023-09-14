import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Movies />} />
    </Routes>
  );
}

export default App;
