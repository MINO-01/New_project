import styled from 'styled-components';

const Counter = styled.p`
  text-align: center;
  color: #555;
  margin-top: 10px;
`;

function TodoCounter({ doneCount }) {
  return <Counter>✅ 완료된 일정: {doneCount}개</Counter>;
}

export default TodoCounter;
