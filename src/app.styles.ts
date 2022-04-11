import styled, {createGlobalStyle} from "styled-components";

import BGImage from "./images/background-clock.jpg"

export const PageStyle = createGlobalStyle` 
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: 100%;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: Roboto, sans-sarif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #787878;
        font-size: 2rem;
        margin: 0 0 0.5em 0;
    }

    h1 {
        background-image: linear-gradient(180deg, #fff, #87f1ff,)
        background-size: 100%;
        background-clip: text;
        filter: drop-shadow(3px, 3px, #88888)
        font-size: 3rem;
        text-align: center;
        margin: 1em;
    }

    .start, .next {
        cursor: pointer;
        background: #fff;
        font-size: 1em;
        color: #99999;
        font-weight: bold;
        letter-spacing: 0.1em;
        border: 5px solid;
        border-image-slice: 1;
        border-width: 5px;
        border-image-source: linear-gradient(90deg, #c5e8e3, #fcc7c4);
        box-shadow: 0 2px 2px 2px rgba(0,0,0,0.2);
        border-radius: 0.25em;
        margin: 2em;
        padding: 0.75em;
    }

    .start:hover, .next:hover {
        border-image-source: linear-gradient(270deg, #c5e8e3, #fcc7c4);
    }

    .start {
        max-width: 250px;
    }
`