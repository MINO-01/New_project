import { Routes, Route } from "react-router-dom";
import DiaryPage from "./pages/User/Diary/DiaryPage";
import LoginPage from "./pages/main/Login/LoginPage";
import TodoPage from "./pages/User/Todo/TodoPage";
import MainPage from "./pages/main/MainPage";
import UserProfilePage from "./pages/User/UserProfile/UserProfilePage";
import UserLayout from "./pages/User/UserLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/user/:username" element={<UserLayout />}>
        <Route path="UserProfile" element={<UserProfilePage/>} />
        <Route path="Todo" element={<TodoPage />} />
        <Route path="Diary" element={<DiaryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
