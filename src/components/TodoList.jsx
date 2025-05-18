import styled from 'styled-components';
import TodoItem from './TodoItem';

const ContainerList = styled.ul`
  width: 100%;
  max-width: 500px;
`;

function TodoList({ todos, setTodos }) {
  const toggleDone = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <ContainerList>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </ContainerList>
  );
}

export default TodoList;
