import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #19747e;
  border-radius: 5px;
  margin-top: 64px;
  box-shadow: 17px 17px 34px #9ac3d040, -17px -17px 34px #b8e9fa40;
  max-width: 1200px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: -webkit-fill-available;
  border-radius: 0;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-right: 1px solid #19747e;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #ccc;
    font-size: 18px;
    pointer-events: none;
  }
`;
export const Input = styled.input`
  /* background-color: #ffffffee; */
  width: 100%;
  padding: 10px 15px 10px 48px;
  font-size: 16px;
  border: none;
  outline: none;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #7c8db0;
  }

  &:focus {
    border-color: #086d7a;
    box-shadow: 0 0 5px rgba(8, 109, 122, 0.5);
  }

  &::placeholder {
    color: #999;
    font-style: italic;
  }

  &.input-first {
    border-radius: 5px 0 0 5px;
  }

  /* &.input-last {
    border-radius: 0 5px 5px 0;
  } */
`;

export const ButtonAction = styled.button`
  background-color: #19747e;
  border: none;
  height: fit-content;
  color: #fff;
  height: 44px;
  width: 100px;
  padding: 0 18px;
  box-shadow: inset 9px 9px 9px #176c75, inset -9px -9px 9px #1b7c87;
`;
