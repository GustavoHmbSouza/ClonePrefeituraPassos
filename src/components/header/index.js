import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';

export default function Html() {
    return (
        <>
            <Header>
                <nav>
                    <h1>icone principal</h1>
                    <input type="text" placeholder="Buscar" />
                    <h1>Icone municipal</h1>
                    <h1>Icone Portal</h1>
                </nav>
                <nav>
                    <ul>
                        <li>Home</li>
                        <Link to="/noticias">
                            <li>Notícias</li>
                        </Link>
                        <li>NFE</li>
                        <li>2º Via IPTU</li>
                        <li>Contas Públicas</li>
                        <li>Concursos / Processos Seletivos</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </Header>
        </>
    );
}
