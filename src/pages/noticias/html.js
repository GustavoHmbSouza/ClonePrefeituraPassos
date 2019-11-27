import React from 'react';
import { Main } from './styles';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {
    ImgMP1,
    ImgMP2,
    ImgMP3,
    ImgMP4,
    ImgMP5,
    ImgMP6,
    ImgMP7,
    ImgMP8,
    ImgMP9,
    imgMS1,
    imgMS2,
    imgMS3,
    imgMS4,
    imgMS5,
    imgMS6,
} from './img/img';

export default function Html() {
    return (
        <>
            <Header />
            <Main>
                <section id="MateriasPrincipais">
                    <article>
                        <img src={ImgMP1} alt="" />
                        <div>
                            <p>
                                Moto G8 Play, G8 Plus, One Macro e E6 Play
                                chegam ao Brasil; confira preços
                            </p>
                            <span>Há 2 horas</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP2} alt="" />
                        <div>
                            <p>
                                Elon Musk destrói seus celulares periodicamente;
                                endenta por quê
                            </p>
                            <span>Há 22 horas</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP3} alt="" />
                        <div>
                            <p>
                                Celulares da Xiaomi com 2 câmeras dob a tela
                                aparece em patente
                            </p>
                            <span>Ontem</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP4} alt="" />
                        <div>
                            <p>
                                Pokémon GO: update tem Equipe Rocket, monstros
                                Galarian e mais
                            </p>
                            <span>Há 23 horas</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP5} alt="" />
                        <div>
                            <p>
                                Escadaria do Coringa vira ponto turístico em
                                Nova York e irrita moradores
                            </p>
                            <span>Há 21 horas</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP6} alt="" />
                        <div>
                            <p>
                                Agenda Netflix: 30 novidades no streaming entre
                                os dias 24 e 30 de outubro
                            </p>
                            <span>Há 71 horas</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP7} alt="" />
                        <div>
                            <p>
                                Tente não rir dessas fotos de atores com seus
                                dublês
                            </p>
                            <span>Há 60 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP8} alt="" />
                        <div>
                            <p>
                                Se você tem uma família, é melhor não comprar
                                esta raça de cão
                            </p>
                            <span>Há 13 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP9} alt="" />
                        <div>
                            <p>
                                Review LG K12 Max: um smartphone basicão de
                                respeito
                            </p>
                            <span>Há 90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS1} alt="" />
                        <div>
                            <p>
                                Review Galaxy Note 10+: o melhor smartphone da
                                Samsung vale o preço?
                            </p>
                            <span>30 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS2} alt="" />
                        <div>
                            <p>
                                Musk explica por que vidro 'inquebrável' do
                                Cybertruck quebrou ao vivo
                            </p>
                            <span>Há 60 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS3} alt="" />
                        <div>
                            <p>
                                Quanto custa carregar um carro elétrico no
                                Brasil?
                            </p>
                            <span>Há 95 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS4} alt="" />
                        <div>
                            <p>
                                É guerra! Ford e Tesla se alfinetam sobre quem
                                tem melhor picape
                            </p>
                            <span>Há 80 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS5} alt="" />
                        <div>
                            <p>
                                Que tal experimentar uma casa totalmente
                                conectada aqui no Brasil?
                            </p>
                            <span>Há 30 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS6} alt="" />
                        <div>
                            <p>
                                Xiaomi confirma lançamento do Mi Note 10 (CC9
                                Pro) para o Brasil
                            </p>
                            <span>Há 40 min</span>
                        </div>
                    </article>
                </section>
            </Main>
            <Footer />
        </>
    );
}
