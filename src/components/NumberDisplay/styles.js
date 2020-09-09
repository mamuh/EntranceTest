import styled from 'styled-components'

export const Container = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 5px;
    margin: 20px 0;

    box-shadow: 2px 2px 10px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      margin: 0;
      border: 1px solid black;

      width: 50px;
      height: 50px;
      text-align: center;
      vertical-align: middle;
    }

    .title-history {
      display: flex;
      padding: 0 20px;
      width: 100%;
      .header {
        opacity: 0.7;
      }
    }
  }
`
