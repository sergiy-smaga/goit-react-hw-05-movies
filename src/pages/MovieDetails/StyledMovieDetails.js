import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background-color: #eee;
  border: 1px solid #eee;
  margin-bottom: 20px;
  :focus {
    border: 1px solid #bbb;
  }
`;
export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;
  border-bottom: 2px solid #bbb;
  div {
    padding: 20px;
  }
`;
