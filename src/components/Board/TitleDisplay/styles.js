import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overlfow: hidden;
  text-align: left;
  direction: rtl;

  h1 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 90px;
    margin: 0;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      height: auto;
      margin-bottom: 10px;
    }
  }
`
