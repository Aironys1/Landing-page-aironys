import './App.css'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <Main />
      <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
            <h3>Acredite que o melhor possa ser feito!</h3>
            <p>Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.</p>
          </div>
          <div className="conteudo-single">
            <h3>Mesmo que pareça difícil, não pare!</h3>
            <p>Não importa que você vá devagar, contanto que você não pare.</p>
          </div>
          <div className="conteudo-single">
            <h3>Nunca perca a esperança!</h3>
            <p>O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.</p>
          </div>
          <div className="conteudo-single">
            <h3>Desistir à primeira é para os fracos, tente sempre mais uma vez!</h3>
            <p>Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
