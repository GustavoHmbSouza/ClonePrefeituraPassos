import styled from 'styled-components';
import { darken } from 'polished';
import { CorPrimaria, CorSecundaria } from '../../styles/coresPadrao';

export const Footer = styled.footer`
    #PrimeiraNav {
        background: ${darken(-0.35, CorPrimaria)};

        div {
            max-width: 1200px;
            margin: auto;
            padding: 15px 0;

            ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                padding: 10px 0;

                @media (min-width: 320px) {
                    grid-template-columns: 1fr 1fr;
                }

                li {
                    font-size: 15.9px;
                    padding: 10px 6px;
                    cursor: pointer;
                    transition: color 0.15s linear;

                    @media (min-width: 320px) {
                        font-size: 12px;
                    }

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }
            }
        }
    }
    #SegundaNav {
        background: ${darken(-0.25, CorPrimaria)};

        div {
            max-width: 1200px;
            margin: auto;
            padding: 25px 0;

            ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                font-size: 18px;
                padding: 10px 0;

                @media (min-width: 320px) {
                    grid-template-columns: 1fr 1fr;
                    font-size: 16px;
                }

                li {
                    padding: 4px;
                    cursor: pointer;
                    transition: color 0.15s linear;

                    &:hover {
                        color: ${CorSecundaria};
                    }
                }
            }
        }
    }
    #TerceiraNav {
        background: ${CorPrimaria};

        div {
            max-width: 1200px;
            margin: auto;
            padding: 35px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (min-width: 320px) {
                display: block;
            }

            ul {
                display: flex;

                @media (min-width: 320px) {
                    justify-content: center;
                }

                li {
                    padding: 0px 15px;
                    text-align: center;
                    cursor: pointer;

                    img {
                        @media (min-width: 320px) {
                            height: 30px;
                            margin: 20px 0;
                        }
                    }
                }
            }

            p {
                @media (min-width: 320px) {
                    text-align: center;
                }
            }
        }
    }
`;
