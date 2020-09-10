import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0;

  .left-number {
    background: #FAFAFA;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0 0 5px;
    h4 {
      padding: 0;
      margin: 0;
    }
  }

  .number-1 {
    background: #ecebfa;
    color: #9b95f0;
  }
  .number-2 {
    background: #eef2fb;
    color: #97b6ef;
  }
  .number-3 {
    background: #f4e4e7;
    color: #e78ea7;
  }
  .number-4 {
    background: #fbf4dc;
    color: #caa845;
  }
  .number-5 {
    background: #f3f3f3;
    color: #919191;
  }
  .number-6 {
    background: #e7f8e3;
    color: #94d176;
  }

  p {
    padding: 0;
    margin: 2px;
  }

  .title-info {
    margin-left: 20px;
    padding: 5px 0;
  }

  .header {
    color: #D0D2D5;
    font-size: 11px;
    margin-bottom: 5px;
  }

  .prev-title {
    font-size: 15px;
  }

`
