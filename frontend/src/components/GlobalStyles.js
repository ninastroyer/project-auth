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

  @media (max-width: 768px) {
   width: 100%;
   padding: 0 20px;
 }
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

export const ButtonContainer = styled.div`
  margin: auto;
`;

export const RegisterButton = styled.button`
  background-color: var(--mainColor);
  color: var(--primaryWhite);
  font-size: 18px;
  border-radius: 30px;
  height: 50px;
  width: 120px;
  margin: auto;
  margin-right: 10px;
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
  width: 120px;
  margin: auto;
  margin-left: 10px;
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

  ${(styling) => styling.secretpage && css`
background-color: var(--lightColor); 
color: var(--primaryBlack);
border: 1px var(--lightColor) solid;
padding: 15px;
margin-bottom: 30px;

&:hover {
    background-color: var(--mainColor); 
    border: 1px var(--mainColor) solid;
    color: var(--primaryBlack);
  }
  `
  } 
  `

export const P = styled.p`
  margin-top: 50px;
  margin-left: 20px;
`;

export const H = styled.h1`
  margin-top: 50px;
  margin-left: 20px;
`;
