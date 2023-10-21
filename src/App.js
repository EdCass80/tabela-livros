import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";

class App extends Component {
  state = {
    livros: []
  };
  componentDidMount() {
    fetch("api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        console.log("Erro na requisição");
      })
      .finally(function () {
        console.log("Sempre retorna")
      })
  }
  handlerRemoverLinha = (id) => {
    const livros = this.state.filter((l) => l.id !== id);
    this.setState({ livros });
  };
  handlerOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    this.setState({ livros });
  };
  handlerOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    livros.reverse();
    this.setState({ livros })
  };

  render() {
    return (
      <table>
        <TabelaBody
          livros={this.state.livros}
          removeLinha={this.handlerRemoverLinha} />
        <TabelaFoot 
        qdeLivros={this.state.livros.length}/>
        <TabelaHead
          ordenarCrescente={this.handlerOrdenarCrescente}
          ordenarDecrescente={this.handlerOrdenarDecrescente} />
      </table>
    );
  }
};

export default App;