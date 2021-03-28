import styled from "styled-components"

// Styled Types
import { StyledImage } from "../../types"

export const ContainerImage = styled.div <StyledImage>`
  width: 30%;
  height: 100%;  
  /* border: 1px solid red; */

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  div {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    /* border:1px solid orange; */
    background-color: #F3F2F1;
    background-image:url(${props => props.contactImage && props.contactImage.trim() !== '' ? props.contactImage : ''});
    background-size:cover;
    background-repeat:no-repeat;    
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;  
  /* border:1px solid blue; */
  padding-left: 5px;
  font-family: "Roboto",sans-serif;
  color: #F3F2F1;
  overflow: hidden;
  padding-top: 10px;

  display:flex;
  flex-flow: column;  
  justify-content: flex-start;    

  span.glasscomponentss-contact_name {
    font-size: 0.6em;
    font-weight: 700;
  }

  span.glasscomponentss-contact_lastMessage {
    font-size: 0.5em;
    font-weight: 500;
    margin-top: 2px;
  }
`

export const ContainerStatus = styled.div`  
  flex: 1;
  height: 100%;
  /* border:1px solid blue; */
  font-family: "Roboto",sans-serif;
  color: #F3F2F1;
  position: relative;
  padding-top: 10px;

  display:flex;
  flex-flow: column; 
  justify-content: flex-start;

  span.glasscomponentss-contact_dateMessage {
    font-size: 0.5em;
    font-weight: 500;
    margin-top: 2px;
    cursor: default;
  }
  span.glasscomponentss-contact_totalMessage {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #F3F2F160;
    font-size: 0.4em;
    font-weight: 700;
    margin-top:3.5px;
    cursor: default;

    display:flex;
    flex-flow: row nowrap; 
    justify-content:center;
    align-items:center;
  }
  span.glasscomponentss-contact_readMessage {
    font-size: 0.6em;
    font-weight: 700;
    position: absolute;
    right:0px;
    bottom:-3px;
  }  

  svg {}
`