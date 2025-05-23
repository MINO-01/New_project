import { useParams } from "react-router-dom";
function UserProfilePage(){
  const { username } = useParams();
    return(
        <div>{username} 정보 수정 페이지 예정</div>
    );
}

export default UserProfilePage;