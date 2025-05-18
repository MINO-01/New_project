import styled from 'styled-components';
import { useState } from 'react';

const Textbox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const InputBox = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const AddButton = styled.button`
  padding: 10px 16px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function TodoInput({ todos, setTodos }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    if (!inputText.trim()) return null;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  return (
    <Textbox>
      <InputBox
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputText}
        onChange={handleInputChange}
      />
      <AddButton onClick={handleAdd}>추가</AddButton>
    </Textbox>
  );
}

export default TodoInput;
