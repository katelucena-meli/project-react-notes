import React, { Component } from "react"

export class FormularioCadastro extends Component {
    render(){
        return(
            <form>
                <input 
                    type="text" 
                    placeholder="Título" 
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota..."
                />
                <button>
                    Criar Nota
                </button>
            </form>
        );
    }
}