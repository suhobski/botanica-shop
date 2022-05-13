import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 0 2px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #414141;
  outline: none;
  font-size: 18px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;

  ${Input}:hover & {
    color: red;
  }
`;
