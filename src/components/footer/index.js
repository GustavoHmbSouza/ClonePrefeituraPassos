import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Footer } from './styles';

export default function Html() {
    return (
        <>
            <Footer>
                <nav id="PrimeiraNav">
                    <ul>
                        <li>
                            <FiClock />
                            <p>Administração</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Educação, Cultura, Esporte e Lazer</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Obras, Habitação e Serviços Urbanos</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Agricultura, Pex e Abastecimento</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Fazenda</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Planejamento</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Assitência Social</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Gabinete</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Procuradoria Geral do Município</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Controladoria Geral do Município</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Indústria, Comércio e Turismo</p>
                        </li>
                        <li>
                            <FiClock />
                            <p>Saúde</p>
                        </li>
                    </ul>
                </nav>
                <nav id="SegundaNav">
                    <ul>
                        <li>Bandeira</li>
                        <li>Turismo</li>
                        <li>Brasão</li>
                        <li>Localização</li>
                        <li>História</li>
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
                </nav>
                <nav id="TerceiraNav">
                    <article>
                        <ul>
                            <li>
                                <FiClock />
                                <p>Fala Cidadão</p>
                            </li>
                            <li>
                                <FiClock />
                                <p>Mapa</p>
                            </li>
                            <li>
                                <FiClock />
                                <p>Fale Conosco</p>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <p>Praça Geraldo da Silva Maia, 175 - Centro</p>
                        <p>CEP - 37900-900</p>
                    </article>
                </nav>
            </Footer>
        </>
    );
}
