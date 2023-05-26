import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`;

export const InsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: white;
  border-radius: 30px;
  height: 50px;
  border: 1px var(--mainColor) solid;
  padding: 20px;
`;

export const RegisterButton = styled.button`
  background-color: var(--mainColor);
  color: var(--primaryWhite);
  font-size: 18px;
  border-radius: 30px;
  height: 50px;
  border: 1px var(--mainColor) solid;
  margin-top: 50px;

  &:hover {
    background-color: var(--lightColor);
    border: 1px var(--lightColor) solid;
    color: var(--primaryBlack);
  }
`;

export const LoginButton = styled.button`
  background-color: var(--mainColor);
  color: var(--primaryWhite);
  font-size: 18px;
  border-radius: 30px;
  height: 50px;
  border: 1px var(--mainColor) solid;
  margin-top: 50px;

  &:hover {
    background-color: var(--lightColor);
    border: 1px var(--lightColor) solid;
    color: var(--primaryBlack);
  }
`;

export const Button = styled.button`
  background-color: var(--mainColor);
  color: var(--primaryWhite);
  font-size: 18px;
  border-radius: 30px;
  height: 50px;
  border: 1px var(--mainColor) solid;
  margin-top: 50px;

  &:hover {
    background-color: var(--lightColor);
    border: 1px var(--lightColor) solid;
    color: var(--primaryBlack);
  }
`;


export const P = styled.p`
  margin-top: 50px;
  margin-left: 20px;
`;
