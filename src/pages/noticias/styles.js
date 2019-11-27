import styled from 'styled-components';
import { darken } from 'polished';
import { CorSecundaria } from '../../styles/coresPadrao';

export const Main = styled.main`
    max-width: 1200px;
    margin: 50px auto;

    @media (max-width: 600px) {
        margin: 20px auto;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        @media (max-width: 600px) {
            display: block;
        }

        article {
            display: grid;
            grid-template-columns: 1fr 1fr;

            @media (max-width: 600px) {
                margin: 15px;
                width: 310px;
            }

            img {
                width: 190px;
                height: 118px;
                cursor: pointer;

                @media (max-width: 600px) {
                    width: 140px;
                    height: 85px;
                    cursor: default;
                }
            }

            div {
                p {
                    margin-bottom: 10px;
                    transition: color 0.15s linear;
                    cursor: pointer;

                    @media (max-width: 600px) {
                        font-size: 12px;
                        cursor: default;
                    }

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }

                span {
                    transition: color 0.15s linear;
                    cursor: pointer;

                    @media (max-width: 600px) {
                        font-size: 10px;
                        cursor: default;
                    }

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }
            }
        }
    }
`;
