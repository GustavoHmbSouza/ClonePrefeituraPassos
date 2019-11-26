import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Footer } from './styles';
import talk from './imgs/talk.png';
import map from './imgs/map.png';
import contatoRodape from './imgs/contatoRodape.png';
import portal from './imgs/portal.png';
import acesso from './imgs/acesso.png';

export default function Html() {
    return (
        <>
            <Footer>
                <nav id="PrimeiraNav">
                    <div>
                        <ul>
                            <li>Administração</li>
                            <li>Educação, Cultura, Esporte e Lazer</li>
                            <li>Obras, Habitação e Serviços Urbanos</li>
                            <li>Agricultura, Pex e Abastecimento</li>
                            <li>Fazenda</li>
                            <li>Planejamento</li>
                            <li>Assitência Social</li>
                            <li>Gabinete</li>
                            <li>Procuradoria Geral do Município</li>
                            <li>Controladoria Geral do Município</li>
                            <li>Indústria, Comércio e Turismo</li>
                            <li>Saúde</li>
                        </ul>
                    </div>
                </nav>
                <nav id="SegundaNav">
                    <div>
                        <ul>
                            <li>Bandeira</li>
                            <li>Turismo</li>
                            <li>Brasão</li>
                            <li>Localização</li>
                            <li>Contatos</li>
                            <li>Hino</li>
                            <li>Agenda de Eventos</li>
                            <li>Parceria</li>
                            <li>Convento</li>
                            <li>Downloads</li>
                            <li>Legislação</li>
                            <li>Procon</li>
                            <li>Saneamento Básico</li>
                            <li>Minha Casa Minha Vida</li>
                            <li>Linhas Urbanas</li>
                            <li>Câmara Municípal</li>
                            <li>GLPI - Intranet</li>
                            <li>Polo UAB de Passos</li>
                            <li>SAAE</li>
                            <li>Servas</li>
                            <li>WebMail Prefeitura</li>
                            <li>AMEG</li>
                            <li>Conselho da Cidade</li>
                            <li>Multas de Trânsito</li>
                            <li>Ponto Eletrônico</li>
                            <li>Santa Casa</li>
                            <li>Serviços OnLine</li>
                        </ul>
                    </div>
                </nav>
                <nav id="TerceiraNav">
                    <div>
                        <article>
                            <ul>
                                <li>
                                    <img src={talk} height="50px" alt="" />
                                    <p>Fala Cidadão</p>
                                </li>
                                <li>
                                    <img src={map} height="50px" alt="" />
                                    <p>Mapa</p>
                                </li>
                                <li>
                                    <img
                                        src={contatoRodape}
                                        height="50px"
                                        alt=""
                                    />
                                    <p>Fale Conosco</p>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <ul>
                                <li>
                                    <img src={portal} height="50px" alt="" />
                                </li>
                                <li>
                                    <img src={acesso} height="50px" alt="" />
                                </li>
                            </ul>
                        </article>
                        <article>
                            <p>Praça Geraldo da Silva Maia, 175 - Centro</p>
                            <p>CEP - 37900-900</p>
                        </article>
                    </div>
                </nav>
            </Footer>
        </>
    );
}
