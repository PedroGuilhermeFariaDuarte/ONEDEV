import styled from "styled-components"

// Styled types
import { StyledButton, StyledTextArea } from "../../types"

export const TextArea = styled.textarea<StyledTextArea>`
  flex:1;
  height: 40px;
  resize: none;
  border: none;
  background: none;
  padding: 10px;
  outline:none;
  position: relative;

  font-family: "Roboto",sans-serif;
  font-weight: 500;
  font-size: 0.8em;
  color: ${props => props.inputMessageTextContentColor && props.inputMessageTextContentColor.trim() !== "" ? props.inputMessageTextContentColor : '#F3F2F1'};
  letter-spacing: 0.7px;
  line-height: 20px;
  vertical-align:sub;

  ::-webkit-scrollbar-track {
      border:none;
      background:none;
      background-color: none;
  }

  ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: none;
  }

  ::-webkit-scrollbar-thumb {
    width:3px;
    height:6px;
    border-radius:5px;
    background-color: #EDEBE9;
  }

  &::placeholder {
    color:${props => props.inputMessagePlaceholderColor && props.inputMessagePlaceholderColor.trim() !== "" ? props.inputMessagePlaceholderColor : '#EDEBE9'};
  }

  &.expand_textarea {
    height: 90px;
  }
`

export const Button = styled.button<StyledButton>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.inputMessageButtonColorBackground && props.inputMessageButtonColorBackground.trim() !== "" ? props.inputMessageButtonColorBackground : '#EDEBE9'};
  padding: 2px;
  margin-left: 4px;
  cursor: pointer;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;


  & svg {
    margin:0px;
    font-size: 1.3em;
    color: ${props => props.inputMessageButtonColor && props.inputMessageButtonColor.trim() !== "" ? props.inputMessageButtonColor : '#201F1E'};
  }

 /* &:hover > svg::before {
    content: "Send a file";
    width: 100px;
    height: auto;
    border-radius: 5px;
    color: #F3F2F1;
    background-color: #201F1E95;
    position: absolute;
    text-align: center;
    padding: 5px;
  } */
`
