import { Segment } from 'semantic-ui-react';
import './App.css';
import Rotas from './Rotas';
import CadastroProduto from './views/produto/CadastroProduto';
function App() {
  return (

    <div className="App">
     <Rotas />
      <CadastroProduto />

      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>

  );
}

export default App;
