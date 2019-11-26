import styled from 'styled-components';
import { darken } from 'polished';
import { CorSecundaria } from '../../styles/coresPadrao';

export const Main = styled.main`
    max-width: 1200px;
    margin: 50px auto;

    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        article {
            display: grid;
            grid-template-columns: 1fr 1fr;

            img {
                width: 190px;
                height: 118px;
                cursor: pointer;
            }

            div {
                p {
                    margin-bottom: 10px;
                    transition: color 0.15s linear;
                    cursor: pointer;

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }

                span {
                    transition: color 0.15s linear;
                    cursor: pointer;

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }
            }
        }
    }
`;
