// pages/Login/LoginPage.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005fcc;
  }
`;

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username) return;
    navigate(`/user/${username}/Todo`);
  };

  return (
    <Wrapper>
      <LoginBox>
        <Title>닉네임을 입력해주세요</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="닉네임 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit">로그인</Button>
        </form>
      </LoginBox>
    </Wrapper>
  );
}

export default LoginPage;
