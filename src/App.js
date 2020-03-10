import React from 'react';

// Class Component
class App extends React.Component{

// Setando o state, no caso está vazio.
  state = {
    nome: ''
  }
// função que armazena o Evento, onde cria um arrow function e faz o setState,
// (cria um novo estado) e nome passa a ser o evento.target.valor
modificarNome = (e) => {
  this.setState({
    nome : e.target.value
  })
}

  render(){
    return(
      <>
      <div>
          {/* o valor é setado pelo o state inical, onChange escuta a função modificarNome*/}
          <input type="text" value={this.state.nome} onChange={this.modificarNome} />
          <h1>Meu nome é {this.state.nome}</h1>
      </div>
    </>
    )
  }
}

export default App;
