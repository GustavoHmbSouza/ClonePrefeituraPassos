import React from 'react';
import { Main } from './styles';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Img1 from './imgs/baner1.jpg';
import Img2 from './imgs/baner2.jpg';

export default function Html() {
    return (
        <>
            <Header />
            <Main>
                <article id="banner1">
                    <h1>Caso Mariele</h1>
                    <h2>
                        Porteiro volta atrás e afirma que errou ao dizer que
                        havia falado com sei jair
                    </h2>
                    <p>
                        Funcionário dissera antes que, no dia do assassinato de
                        Marielle, um dos acusados entrou em condomínio dizendo
                        que ia à casa de Bolsonaro. Na data, o presidente estava
                        em Brasília.
                    </p>
                </article>
                <section>
                    <article id="banner2">
                        <img src={Img1} alt="" />
                        <h1>
                            Crise na Venezuela: a vida no Country Club de
                            Caracas, oásis de riqueza no país
                        </h1>
                    </article>
                    <article id="banner3">
                        <img src={Img2} alt="" />
                        <h1>
                            CCJ da Câmara dá aval a proposta que permite prisão
                            de réu após condenação em segunda instância
                        </h1>
                    </article>
                </section>
            </Main>
            <Footer />
        </>
    );
}
