import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const MenuHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent; /* 배경색을 투명하게 설정 */
  color: black; /* 텍스트 색상은 유지 (필요에 따라 조절) */
  padding: 15px 0;
  z-index: 1000;
`;
// NavList 스타일
const NavList = styled.ul`
  list-style: none; /* li의 기본 점 제거 */
  margin: 0;
  padding: 0;
  display: flex; /* 가로 배치 */
  justify-content: center;
`;

// NavItem 스타일
const NavItem = styled.li`
  margin: 0 20px; /* 메뉴 항목 간 간격 */
  font-size: 1.1em;
`;

// NavLink 스타일 (a 태그에 적용)
const NavLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: black; /* 텍스트 색상 */
  font-weight: bold; /* 폰트 굵기 */
  font-size: 1.1em; /* 폰트 크기 */
  transition: color 0.3s ease; /* 호버 시 색상 변화 애니메이션 */

  &:hover {
    color: #BBDEFB; /* 호버 시 연한 파란색으로 변경 */
  }
`;

function UserLayout(){
  const {username} = useParams();
    return(
    <>
    <MenuHeader>
      <NavList>
        <NavItem><NavLink to={`/user/${username}/Userprofile`}> 내 정보 </NavLink></NavItem>
        <NavItem><NavLink to={`/user/${username}/Todo`}>할 일 정리 </NavLink></NavItem>
        <NavItem><NavLink to={`/user/${username}/Diary`}>일기 쓰기 </NavLink></NavItem>
      </NavList>
    </MenuHeader>

    <Outlet />
    </>
    );
}

export default UserLayout;
