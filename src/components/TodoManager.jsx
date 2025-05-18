import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoCounter from './TodoCounter';
import TodoInput from './ToDoInput';
import TodoList from './TodoList';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
`;

const SubTitle = styled.h2`
  text-align: center;
  color: black;
`;
function TodoManager() {
  const [todos, setTodos] = useState([]);
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    const completed = todos.filter(todo => todo.done).length;
    setDoneCount(completed);
  }, [todos]);

  useEffect(() => {
    alert("오늘의 일정을 입력해주세요 😊\n오늘도 화이팅입니다!");
  }, []);

  return (
    <Container>
      <Title>✅ To do list</Title>
      <SubTitle>하루 일정</SubTitle>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoCounter doneCount={doneCount} />
    </Container>
  );
}

export default TodoManager;