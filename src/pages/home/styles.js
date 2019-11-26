import styled from 'styled-components';
import { darken } from 'polished';
import { CorPrimaria } from '../../styles/coresPadrao';

export const Main = styled.main`
    max-width: 1200px;
    margin: 50px auto;
    display: flex;

    #banner1 {
        border: 1px solid #ccc;
        height: 760px;
        width: 595px;
        margin-right: 10px;
        background: rgb(255, 255, 255);
        padding: 30px;
        cursor: pointer;

        h1 {
            font-size: 18px;
        }

        h2 {
            margin-top: 200px;
            font-size: 40px;
            color: ${CorPrimaria};
            transition: color 0.15s linear;
        }

        p {
            margin-top: 20px;
            font-size: 18px;
        }

        &:hover h2 {
            color: ${darken(0.05, CorPrimaria)};
        }
    }

    #banner2 {
        border: 1px solid #ccc;
        height: 375px;
        width: 595px;
        background: white;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        img {
            height: 375px;
            width: 595px;
            transition: transform 0.15s linear;
            filter: brightness(70%);
        }

        h1 {
            position: absolute;
            left: 5%;
            right: 5%;
            bottom: 20px;
            z-index: 10;
            padding-top: 20px;
            color: white;
            font-size: 25px;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }

    #banner3 {
        border: 1px solid #ccc;
        height: 375px;
        width: 595px;
        background: white;
        margin-top: 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        img {
            height: 375px;
            width: 595px;
            transition: transform 0.15s linear;
            filter: brightness(70%);
        }

        h1 {
            position: absolute;
            left: 5%;
            right: 5%;
            bottom: 20px;
            z-index: 10;
            padding-top: 20px;
            color: white;
            font-size: 25px;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }
`;
