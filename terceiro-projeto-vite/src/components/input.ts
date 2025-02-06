import styled from "styled-components";

export const Input = styled.input`
  padding: 10px 30px;
  outline: none;
  transition: all .6s;
  border: 1px solid transparent;
  background-color: ${props => props.theme.primary};

  &.focus {
    border-color: red;
  }

  &.hover {
    background-color: green;
  }
`;