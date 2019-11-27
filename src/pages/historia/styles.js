import styled from 'styled-components';
import { darken } from 'polished';
import { CorSecundaria } from '../../styles/coresPadrao';

export const Main = styled.main`
    max-width: 1200px;
    margin: 50px auto;

    @media (max-width: 600px) {
        width: 285px;
        margin: 5px auto;
    }

    p {
        padding: 15px 0;
        font-size: 17px;

        @media (max-width: 600px) {
            font-size: 14px;
        }
    }

    #tituloTexto {
        font-size: 27px;
        color: ${darken(0.25, CorSecundaria)};

        @media (max-width: 600px) {
            font-size: 24px;
        }
    }
`;
