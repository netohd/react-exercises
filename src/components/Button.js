import styled, { css } from "styled-components";

const ButtonStyle = styled.button`
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

ButtonStyle.defaultProps = {
  theme: {
    main: 'palevioletred',
  }
}

function Button(props) {
// Declarar a função da forma abaixo dá na mesma, estaria desconstruindo
// o objeto que vem nas propriedades

//function Button({ onClick, disabled, text }) {

  const handleClick = () => {
    alert(props)
  }
  
  return (
    <ButtonStyle
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.text}
    </ButtonStyle>
  )
}

export default Button;