import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  max-height: 120px;
  width: 400px;
  text-align: left;
  padding: 15px;
  left: 80px;
  background: #f6f6f6;
  border-radius: 10px;
  overflow: hidden;

  p {
    max-width: 50vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  p.header {
    opacity: 0.4;
    font-size: 12px;
  }

  .section:first-child {
    margin-bottom: 10px;
  }

`

  // &:after {
  //   content: "a";
  //   background: red;
  //   width: 50px;
  //   position: absolute;
  //   top: 100%;
  //   left: 50%;
  //   border-width: 5px;
  //   border-style: solid;
  //   border-color: black transparent transparent transparent;
  // }
