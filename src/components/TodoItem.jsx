import styled from 'styled-components';

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const Text = styled.span`
  cursor: pointer;
  color: black;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
`;

const Completebtn = styled.button`
  background-color: transparent;
  border: 1px solid #ddd;
  color: black;
  cursor: pointer;
`;

const Deletebtn = styled.button`
  background-color: transparent;
  border: 1px solid #ddd;
  color: red;
  cursor: pointer;
`;

function TodoItem({ todo, toggleDone, deleteTodo }) {
  return (
    <List>
      <Text done={todo.done}>{todo.text}</Text>
      <ButtonGroup>
        <Completebtn onClick={() => toggleDone(todo.id)}>완료</Completebtn>
        <Deletebtn onClick={() => deleteTodo(todo.id)}>삭제</Deletebtn>
      </ButtonGroup>
    </List>
  );
}

export default TodoItem;
