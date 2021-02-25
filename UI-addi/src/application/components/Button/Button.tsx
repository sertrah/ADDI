import styled, { css } from "styled-components";

type ButtonComponentProps = {
  primary?: boolean;
};

const Button = styled.button<ButtonComponentProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #a3567b;
  color: #a3567b;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  :hover {
    border: 2px solid #f0afcd;
    color: #f0afcd;
  }
  ${(props) =>
    props.primary &&
    css`
      background: #a3567b;
      color: white;
      :hover {
        background: #f0afcd;
        color: white;
      }
    `}
    :disabled {
        background: var(--gray-2-color);
        border-color: var(--gray-2-color);
        cursor: default;
      }
`;

export default Button;
