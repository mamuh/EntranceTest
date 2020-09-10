import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  text-align: center;
  border-radius: 0 13px 13px 0;
  width: 4rem;
  background: #f9fbfa;
  border: 2px solid white;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.15);
  position: fixed;
  left: 0;
  top: 15vh;
  z-index: 999;

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    top: auto;
    bottom: 0;
    height: 70px;
    width: 100%;
    border-radius: 0;
    box-shadow: -1px -4px 5px rgba(0,0,0,0.15);

    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    ul li {
      list-style: inline;
      float: left;
    }
  }
`

