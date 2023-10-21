import React from "react";
const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de livros</th>
        </tr>
        <tr>
            <tr>ISBN</tr>
            <tr>Título
                <div class="container-setinhas">
                    <div onClick={() => props.ordenarCresente()}>&#129093;</div>
                    <div onClick={() => props.ordenarDecresente()}>&#129095;</div>
                </div>
            </tr>
            <tr>Autor</tr>
            <tr></tr>
        </tr>
    </thead>
);
export default TabelaHead;