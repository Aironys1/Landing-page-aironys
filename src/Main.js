function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3 className="nome">Aironys Garrido</h3>
            </div>
            <div>
                <img className="imagem" src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/d/c/2/8/dc289846effe2a6ee54f7719434c300f.jpg" />
            </div>
            <div className="item-menu">
              <a href="https://github.com/Aironys1" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="form">
            <form>
              <h4>Preencha seus dados</h4>
              <div className="items-form">
                <input placeholder="Seu nome" type="text" />
                <input placeholder="E-mail" type="email" />
                <input placeholder="WhatsApp" type="tel" />
                <input placeholder="Assunto" type="text" />
                <h2>Deixe uma mensagem!</h2>
                <textarea placeholder="Sua mensagem" >

                </textarea>
                <input onClick="mensagemEnviada()" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}



export default Main;