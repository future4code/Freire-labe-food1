import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
`;

export const ButtonSignup = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  padding: 12px 20px;
  margin-top: 8px;
`;
