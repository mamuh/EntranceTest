import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 5rem;
  margin-right: 2rem;
  padding: 30px;
  padding-top: 0;
  height: 100vh;

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 0 15px 12vh 15px;
    height: 90vh;
  }
`
