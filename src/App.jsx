import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Diary from "./pages/main/about/Diary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/diary" element={<Diary />} />
    </Routes>
  );
}

export default App;
