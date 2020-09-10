import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overlfow: hidden;
  text-align: left;
  direction: rtl;
  padding: 12px 20px 10px 20px;
  border-radius: 0 0 15px 15px;
  box-shadow: 2px 2px 7px rgba(0,0,0,0.1);
  margin-bottom: 5px;

  h1 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 90px;
    margin: 0;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      height: auto;
      margin-bottom: 10px;
    }
    padding: 5px;
    box-shadow: none;
  }
`
