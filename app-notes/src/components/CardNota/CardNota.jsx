import React, { Component } from 'react';
import "./estilo.css"

export class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">Título</h3>
                    <p className="card-nota_texto">Escreva sua nota</p>
                </header>
            </section>
            );
    }
}