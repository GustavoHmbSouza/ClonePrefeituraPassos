import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { CorPrimaria } from './coresPadrao';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root
    {
        min-height: 100%;
    }

    body
    {
        background: ${darken(-0.45, CorPrimaria)};
    }

    body, input, button
    {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button
    {
        cursor: pointer;
    }

    li
    {
        list-style:none;
    }
`;
