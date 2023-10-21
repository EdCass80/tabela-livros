import React from "react";
const TabelaBody = (props) => (
    <tbody>
        {props.livros.map((livro, index) => (
            <tr Key={livro.id} >
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.preco}</td>
                <td>

                    <button
                        onClick={() => props.removeLinha(livro.id)}
                        className="botao remover">Remover</button>
                </td>
            </tr>
        ))}
        <tr>
        </tr>
    </tbody>
);
export default TabelaBody;