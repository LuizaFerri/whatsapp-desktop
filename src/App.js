import React from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  return (
    <div className="app-janela">
      <div className="areaMensagens">

        <header>
          <img src="https://thumbs2.imgbox.com/91/10/k91JmufM_t.png" alt="avatar" className="avatar" />
          <div className="botoes" >
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="Busca">
          <div className="busca-imput">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="listaChat">

          <div className="itens-lista">
            <img className="avatar-itens" src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
            <div className="linhas-itens">
              <div className="linha-itens">
                <div className="nomeUsuario">
                  Antonio Brasílio
                </div>
                <div className="horaChat"> 19:30 </div>
              </div>
              <div className="linha-itens">
                <div className="ultimaMSG">
                  <span> Olá, tudo bem?   </span>
                </div>
              </div>
            </div>
          </div>

          <div className="itens-lista">
            <img className="avatar-itens" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
            <div className="linhas-itens">
              <div className="linha-itens">
                <div className="nomeUsuario">
                  Katia
                </div>
                <div className="horaChat"> 18:00 </div>
              </div>
              <div className="linha-itens">
                <div className="ultimaMSG">
                  <span> Boa noite   </span>
                </div>
              </div>
            </div>
          </div>

          <div className="itens-lista">
            <img className="avatar-itens" src="https://scpraias.com.br/wp-content/uploads/2018/06/avatar-mulher-5.png" alt="avatar" />
            <div className="linhas-itens">
              <div className="linha-itens">
                <div className="nomeUsuario">
                  Clara
                </div>
                <div className="horaChat"> 17:00 </div>
              </div>
              <div className="linha-itens">
                <div className="ultimaMSG">
                  <span> Hoje vai ter aula? </span>
                </div>
              </div>
            </div>
          </div>

          <div className="itens-lista">
            <img className="avatar-itens" src="https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg" alt="avatar" />
            <div className="linhas-itens">
              <div className="linha-itens">
                <div className="nomeUsuario">
                  Victoria
                </div>
                <div className="horaChat"> 13:00 </div>
              </div>
              <div className="linha-itens">
                <div className="ultimaMSG">
                  <span>  Olá  </span>
                </div>
              </div>
            </div>
          </div>
       </div>
      </div>

      <div className="areaConteudo">
        <img className="imagemlogo" src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="logo" />
        <h1> Mantenha seu celular conectado </h1>
        <h2> O WhatsApp conecta ao seu celular para sincronizar suas mensagens.<br></br> Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi. </h2>
      </div>
    </div>
  );
}
