// pages/Main/MainPage.jsx

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

const StyledLinkBox = styled(Link)`
  text-decoration: none;
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 300px;

  &:hover {
    transform: scale(1.03);
  }
`;

const LoginText = styled.span`
  font-size: 20px;
  color: #0077ff;
  font-weight: bold;
`;

function MainPage() {

  return (
    <Wrapper>
      <Title>하루를 완벽하게 계획해보세요.<br />당신만의 Todo List를 시작하세요.</Title>
     <StyledLinkBox to="/login">
        <LoginText>닉네임 입력하러 가기 →</LoginText>
      </StyledLinkBox>
    </Wrapper>
  );
}

export default MainPage;