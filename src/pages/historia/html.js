import React from 'react';
import { Main } from './styles';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Html() {
    return (
        <>
            <Header />
            <Main>
                <p>
                    Em meados do século XVII, a região de Passos era pouco
                    explorada e era denominada "Sertões de Jacuhy ou Cercanias
                    de Jacui" um " lugar perdido nesse mundo de Deus.
                </p>
                <p>
                    O encontramento de ouro provocou uma "corrida" de paulistas
                    e mineiros para o local à procura de melhores condições de
                    vida representadas pels faiscagens de ouro ou por
                    alternativas oferecidas pelos recursos naturais.
                </p>
                <p id="tituloTexto">
                    A História administrativa de Passos, pode ser dividida em
                    cinco fases
                </p>
                <p>
                    1 - Fase de formação (1780 a 1830) que corresponde à
                    implantação das roças de subsistência, ao assentamento das
                    primeiras fazendas (Ninfas, Cruzeiro e Bonsucesso), à
                    formação do arraial e à ausência de um sistema
                    administrativo
                </p>
                <p>
                    2 - Fase da consolidação do arraial, a redefinição do seu
                    traçado urbano e inicio de um sistmea administrativo misto,
                    público (Juizado de Paz) e religioso (Curato Paróquia).
                </p>
                <p>
                    3 - Fase da autonomia religioso: da criação da Paróquia a
                    criação da vila. O arrailal se torna Paróquia e Matriz (do
                    Bizpado de São Paulo), mas depende das leis de Jacuí,
                    passando a existir os dois poderes: executivo e legislativo,
                    embora num mesmo órgão: a Câmara.
                </p>
                <p>
                    4 - Fase da autonomia administrativa, iniciada com a criação
                    da Vila 1850, depois cidade, tronando-se independente da
                    Vila de Jacuí, podendo então adquirir um certo "status" e
                    ter a possibilidade de exibir certa importância que outros
                    lugares não possuiam.
                </p>
                <p>
                    5 - Fase Republicana a partir da organização da República
                    passa a existir como Município e conta com Prefeitura
                    Municipal policitamente independente. Durante os anos 60
                    houve um significativo progresso da contrução da Usina de
                    Furnas na região. O passado provinciano e rural foi
                    ultrapassado e Passos tronou-se o que é hoje: a cidade pólo
                    cormercial e industrial da região.
                </p>
            </Main>
            <Footer />
        </>
    );
}
