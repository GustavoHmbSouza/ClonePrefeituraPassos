import styled from 'styled-components';
import { darken } from 'polished';
import { CorSecundaria } from '../../styles/coresPadrao';

export const Main = styled.main`
    max-width: 1200px;
    margin: 50px auto;

    @media (min-width: 320px) {
        width: 285px;
    }

    p {
        padding: 15px 0;
        font-size: 17px;

        @media (min-width: 320px) {
            font-size: 14px;
        }
    }

    #tituloTexto {
        font-size: 27px;
        color: ${darken(0.25, CorSecundaria)};

        @media (min-width: 320px) {
            font-size: 24px;
        }
    }
`;
