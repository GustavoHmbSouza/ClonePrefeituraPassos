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
                            <span>Desafio Mundial</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP8} alt="" />
                        <div>
                            <p>
                                Se você tem uma família, é melhor não comprar
                                esta raça de cão
                            </p>
                            <span>Soolide</span>
                        </div>
                    </article>
                    <article>
                        <img src={ImgMP9} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS1} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS2} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS3} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS4} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS5} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                    <article>
                        <img src={imgMS6} alt="" />
                        <div>
                            <p>
                                Se você ver ondas quadradas no oceano
                                imediatamente sair da água
                            </p>
                            <span>90 min</span>
                        </div>
                    </article>
                </section>
            </Main>
            <Footer />
        </>
    );
}
