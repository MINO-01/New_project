import { Link } from "react-router-dom";
import TodoManager from "../../components/TodoManager";

function MainPage() {
  return (
    <div>
      <Link to="/diary">일기 쓰러가기</Link>
      <TodoManager />
    </div>
  );
}

export default MainPage;
