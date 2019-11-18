import styled from 'styled-components';

const roxoClaro1 = 'rgb(236, 231, 248)';
const roxoClaro2 = 'rgb(204, 183, 253)';
const roxoClaro3 = 'rgb(113, 89, 193)';

const verdeAgua = 'rgb(3, 212, 167)';
const boxShadowPadrao = '1px 2px 5px rgba(0, 0, 0, 0.5)';

const bordaBotoesMenu = `color: ${verdeAgua}; border: 2px solid ${verdeAgua}; box-shadow: none;`;

export const Footer = styled.footer`
    #PrimeiraNav {
        background: ${roxoClaro1};

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
                    color: ${verdeAgua};
                }

                p {
                    padding-left: 5px;
                }
            }
        }
    }
    #SegundaNav {
        background: ${roxoClaro2};

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            font-size: 16px;
            padding: 10px;

            li {
                padding: 4px;
                cursor: pointer;

                &:hover {
                    color: ${verdeAgua};
                }
            }
        }
    }
    #TerceiraNav {
        background: ${roxoClaro3};
        display: flex;
        justify-content: space-between;

        ul {
            display: flex;
        }
    }
`;
