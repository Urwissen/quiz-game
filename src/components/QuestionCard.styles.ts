import styled from "styled-components";
import { Wrapper as IWrapper } from "../interfaces"

export const Wrapper = styled.div`
    max-width: 1000px;
    background: #ebeff;
    border-radius: 0.25em;
    border: none;
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.2);
    padding: 3.5em;
    p {
        font-size: 1em;
    }
`

export const BtnWrapper = styled.div<IWrapper>`
    transition: all 250ms ease;

    :hover {
        opacity: 0.85;
    }
    
    button {
        display: block;
        cursor: pointer;
        user-select: none;
        border-radius: 0.25em;
        border: none;
        font-size: 0.9rem;
        font-weight: bold;
        width: 80%;
        margin: 0.25em auto;
        background: ${({correct, userClicked}) => 
            correct ? "#c5e8e3" : !correct && userClicked ?  "salmon" : "#fff"
        }
    }
`
