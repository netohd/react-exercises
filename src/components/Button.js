import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  }
}

export default Button;