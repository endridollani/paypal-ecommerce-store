import { Button, Input, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 1em;
`;

export const StyledRow = styled(Row)`
  padding: 5em;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;

  [class*='ant-form-item-explain-error'] {
    display: flex;
    padding-top: 5px;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 5px;
  &.style-underline {
    color: #141414;
    &.btn-light {
      color: #434343;
    }
    font-size: 1.2rem;
    &:hover {
      display: inline-block;
      position: relative;
      color: #1d39c4;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #1d39c4;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const StyledHeader = styled(Header)`
  height: 10vh;
  background-color: inherit;
  box-shadow: 0px 7px 17px -6px rgba(102, 102, 102, 0.75);
  -webkit-box-shadow: 0px 7px 17px -6px rgba(102, 102, 102, 0.75);
  -moz-box-shadow: 0px 7px 17px -6px rgba(102, 102, 102, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-logo {
    cursor: pointer;
    display: flex;
    font-size: 45px;
    color: #0050b3;
  }
  padding: 0 10%;
`;

export const StyledGuestContent = styled(Content)`
  padding: 4em 15%;

  .hero-section-text {
    font-size: 5em;
    width: 80%;
    color: #434343;
  }
  .hero-section-word-emphasize {
    color: #338fe3;
    position: relative;

    ::before {
      content: '';
      position: absolute;
      bottom: 16px;
      left: -4.8em;
      width: 150px;
      height: 14px;
      transform: skew(-12deg) translateX(-50%);
      background: rgba(15, 108, 255, 0.17);
      z-index: 1;
    }
  }

  .footer {
    color: #8c8c8c;
    position: fixed;
    bottom: 20px;
    left: 48%;
    right: 0;
  }
`;
