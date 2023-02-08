/* eslint-disable no-confusing-arrow */
/* eslint-disable prettier/prettier */
import { Button, Form, Input, Layout, Modal, Row, Tag } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 1em;
`;

export const StyledRow = styled(Row)`
  padding: 4em;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;

  [class*='ant-form-item-explain-error'] {
    display: flex;
    padding-top: 5px;
  }
`;

export const FormItemStyled = styled(Form.Item)`
  font-weight: 400;
  text-transform: capitalize;
  margin-top: 1rem;
  display: block;
  .ant-picker {
    width: 100%;
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
  .capitalize {
    text-transform: capitalize;
  }
  .avatar {
    background-color: #531dab;
    border-radius: 5px;
    cursor: pointer;
  }
  .options-btn {
    svg {
      color: #262626;
    }
  }
  .header-menu {
    [class*='ant-btn'] {
      border: none;
      background-color: inherit;
      padding: 0;
      margin: 0;
    }
  }
  .admin-tag {
    color: #262626;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #1d39c4;
    letter-spacing: 2px;
    font-size: 1em;
  }
  padding: 0 10%;
`;

export const StyledGuestContent = styled(Content)`
  padding: 2% 10%;
  svg {
    width: 100%;
    height: 100%;
  }
  .hero-section-text {
    font-size: 4.8em;
    color: #434343;
  }
  .hero-section-word-emphasize {
    color: #338fe3;
    position: relative;

    ::before {
      content: '';
      position: absolute;
      bottom: 16px;
      left: 1.2em;
      width: 150px;
      height: 14px;
      transform: skew(-12deg) translateX(-50%);
      background: rgba(15, 108, 255, 0.17);
      z-index: 1;
    }
  }

  .footer {
    margin-top: 1rem;
    color: #8c8c8c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CustomModal = styled(Modal)`
  & .ant-modal-content {
    border-radius: 12px;
    padding-top: 12px;
  }

  & .ant-modal-header {
    border-radius: 12px;
  }

  & .ant-modal-close {
    top: 24px;
    right: 12px;
  }

  & .form-item-styled {
    border-radius: 5px;
    padding: 1em;
  }
`;

export const StyledTextArea = styled(TextArea)`
  border-radius: 8px;
  height: 44px;
`;

export const StyledContainer = styled.div`
  padding: 30px;
  background-color: rgba(102, 102, 102, 0.75);
`;
export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledUserContent = styled(Row)`
  width: 100%;

  & .full-width {
    width: 100%;
  }

  & .list-card {
    margin: 10px;
    border-radius: 8px;
  }

  & .product-card {
    margin: 10px;
    border-radius: 8px;
  }

  & .product-img {
    padding: 10px;
  }

  & .add-to-card-btn {
    border-radius: 2px;
  }

  & .card-action-wraper {
    .ant-btn {
      border: none;
    }
    .quantity {

      border: 1px solid #096dd9;
      border-left: none;
      border-right: none;
      background-color: #e6f7ff;
      padding: 4px 15px;
    }
    .minus-icon {
      color: #ff4d4f;
    }
    .plus-icon {
      color: #389e0d;
    }
  }

  & .cart-avatar {
    border-radius: 5px;
    background-color: #bae0ff;
    color: black;
    border: 1px solid #1d39c4;
    cursor: pointer;
  }

  [class*='ant-tabs-nav'] {
    padding-top: 20px;
    .ant-tabs-nav-list {
      padding: 20px;
      gap: 30px;
    }
    .ant-tabs-tab {
      padding: 20px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      justify-content: center;
    }

    .ant-tabs-tab-active {
      padding: 20px;
      background-color: #0050b3;
      border-radius: 5px;
      .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
`;

export const StyledAdminTag = styled(Tag)<{ type: boolean }>`
  padding: 5px 10px;
  border-radius: 5px;
  ${({ type }) =>
    type ? 'background-color: #adc6ff' : 'background-color: #95de64'}
`;
