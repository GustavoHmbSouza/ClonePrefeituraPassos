import styled from 'styled-components';
import { darken } from 'polished';
import { CorPrimaria, CorSecundaria } from '../../styles/coresPadrao';

export const Footer = styled.footer`
    #PrimeiraNav {
        background: ${darken(-0.35, CorPrimaria)};

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 10px;

            li {
                display: flex;
                font-size: 14px;
                padding: 6px;
                cursor: pointer;

                &:hover {
                    color: ${CorSecundaria};
                }

                p {
                    padding-left: 5px;
                }
            }
        }
    }
    #SegundaNav {
        background: ${darken(-0.25, CorPrimaria)};

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            font-size: 16px;
            padding: 10px;

            li {
                padding: 4px;
                cursor: pointer;

                &:hover {
                    color: ${CorSecundaria};
                }
            }
        }
    }
    #TerceiraNav {
        background: ${CorPrimaria};
        display: flex;
        justify-content: space-between;

        ul {
            display: flex;
        }
    }
`;
