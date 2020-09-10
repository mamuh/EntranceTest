import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  border-radius: 13px;
  margin: 0.2rem 0;
  min-width: 100%;
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

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .tooltiptext {
    background: red;
    visibility: hidden;
    width: 35px;
    opacity: 0.6;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    left: 4rem;
    z-index: 1;
  }

  &:hover .tooltiptext {
    visibility: visible;
  }

  .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
`
