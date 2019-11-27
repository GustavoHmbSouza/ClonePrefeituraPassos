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

        @media (min-width: 320px) {
            display: block;
        }

        article {
            display: grid;
            grid-template-columns: 1fr 1fr;

            @media (min-width: 320px) {
                margin: 15px;
            }

            img {
                width: 190px;
                height: 118px;
                cursor: pointer;

                @media (min-width: 320px) {
                    width: 140px;
                    height: 85px;
                }
            }

            div {
                p {
                    margin-bottom: 10px;
                    transition: color 0.15s linear;
                    cursor: pointer;

                    @media (min-width: 320px) {
                        font-size: 12px;
                    }

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }

                span {
                    transition: color 0.15s linear;
                    cursor: pointer;

                    @media (min-width: 320px) {
                        font-size: 10px;
                    }

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }
            }
        }
    }
`;
