import styled from 'styled-components';
import { darken } from 'polished';
import { CorPrimaria, CorSecundaria } from '../../styles/coresPadrao';

export const Main = styled.div`
    background: ${CorPrimaria};

    header {
        max-width: 1200px;
        margin: auto;

        div {
            display: flex;
            align-items: center;

            @media (max-width: 600px) {
                display: block;
                text-align: center;
            }

            img {
                cursor: pointer;

                @media (max-width: 600px) {
                    cursor: default;
                }
            }

            input {
                margin-left: 30px;
                width: 400px;
                height: 40px;
                border-radius: 20px;
                padding: 0 20px;
                border: 2px solid transparent;
                transition: border 0.2s linear;

                @media (max-width: 600px) {
                    width: 280px;
                    margin-left: 0px;
                }

                &:focus {
                    border: 2px solid ${CorSecundaria};
                }
            }
        }

        nav ul {
            display: flex;

            @media (max-width: 600px) {
                display: grid;
                text-align: center;
                grid-template-columns: 1fr 1fr;
            }

            li {
                padding: 15px 20px;
                cursor: pointer;
                border-radius: 5px;
                transition: background 0.2s linear;

                @media (max-width: 600px) {
                    cursor: default;
                }

                &:hover {
                    background: ${darken(0.05, CorPrimaria)};
                }
            }
        }
    }
`;
