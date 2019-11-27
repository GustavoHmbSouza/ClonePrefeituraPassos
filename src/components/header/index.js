import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles';
import Logo from './imgs/logo.png';

export default function Html() {
    return (
        <>
            <Main>
                <header>
                    <div>
                        <Link to="/">
                            <img src={Logo} height="100px" alt="" />
                        </Link>
                        <input type="text" placeholder="Buscar" />
                    </div>
                    <nav>
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>

                            <Link to="/noticias">
                                <li>Notícias</li>
                            </Link>
                            <li>NFE</li>
                            <li>2º Via IPTU</li>
                            <li>Contas Públicas</li>
                            <Link to="/historia">
                                <li>História</li>
                            </Link>
                            <li>Concursos / Processos Seletivos</li>
                        </ul>
                    </nav>
                </header>
            </Main>
        </>
    );
}
