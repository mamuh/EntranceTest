import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  border-radius: 13px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.primary && css`
    background:white;
    color: black;
  `}
`
