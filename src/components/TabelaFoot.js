import React from "react";
const TabelaFoot = (props) => (
    <tFoot>
        <tr>
            <td colSpan="5">Quantidade de livros na tabela: {props.qdeLivros}</td>
        </tr>
    </tFoot>
);
export default TabelaFoot;