import { useParams } from "react-router-dom";
function DiaryPage(){
  const { username } = useParams();
    return(
        <div>{username}님의 일기</div>
    );
}

export default DiaryPage;