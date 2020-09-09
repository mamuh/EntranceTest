import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  border-radius: 13px;
  margin: 0.2rem 0;
  min-width: 50px;
  height: 50px;
  outline: none;
  background: transparent;
  color: black;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #f6f6f6;
  }
  &:active {
    transform: translateY(2px);
  }

  img {
    width: 25px;
    height: 25px;

  }
`

export const Test = styled.div`
  display: flex;
  align-items: center;
`
