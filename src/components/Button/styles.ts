import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    color: #FFFFFF;
    border-radius: 22px;
    position: relative;
    border-color: #565656; 
  
    padding: 2px 12px;
    margin: 0 5px;
    min-width: 60%;
    width: 100%;


    ${({variant}) => variant !== "primary" && css`
    font-family: 'Open Sans';
    font-weight: bold;
    font-weight: 700;
    font-size: 18px;
  
    min-width: 167px;
    height: 33px;
    background: #E4105D;
    border-color: #E4105D;

    &:hover {
        opacity: 0.6;
    }

    &::after {
        content: '';
        position: absolute;
        border: 1px solid #E4105D;
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border-radius: 22px;
    }
    `}
    `




