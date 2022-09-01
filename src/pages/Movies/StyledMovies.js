import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  input,
  button {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    background-color: #eee;
    border: 1px solid #eee;
    :focus {
      border: 1px solid #bbb;
    }
  }
`;
