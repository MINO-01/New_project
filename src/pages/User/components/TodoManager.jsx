// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import TodoCounter from '../Todo/components/TodoCounter';
// import TodoInput from '../Todo/components/TodoInput';
// import TodoList from '../Todo/components/TodoList';


// const Container = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
// `;

// const Title = styled.h1`
//   margin-bottom: 24px;
//   font-size: 45px;
//   color: #333;
//   text-align: center;
// `;

// const SubTitle = styled.h2`
//   text-align: center;
//   color: black;
// `;
// function TodoManager() {
//   const { username } = useParams(); // ✅ 주소에서 username을 바로 가져옴

//   const [todos, setTodos] = useState([]);
//   const [doneCount, setDoneCount] = useState(0);

//   useEffect(() => {
//     const completed = todos.filter(todo => todo.done).length;
//     setDoneCount(completed);
//   }, [todos]);

//   useEffect(() => {
//     alert("오늘의 일정을 입력해주세요 😊\n오늘도 화이팅입니다!");
//   }, []);

//   return (
//     <Container>
//       <Title>{username}님의 To do list</Title>
//       <SubTitle>하루 일정</SubTitle>
//       <TodoInput todos={todos} setTodos={setTodos} />
//       <TodoList todos={todos} setTodos={setTodos} />
//       <TodoCounter doneCount={doneCount} />
//     </Container>
//   );
// }

// export default TodoManager;