import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import myPhoto from './Imagens/eu.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={myPhoto} 
          nome="Pablo Aguiar"
          descricao="Oi, sou Pablo Aguiar. Sou um Dev em formação pelo labenu. Adoro aprender coisas novas voltadas para a área."
        />
      
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
        imagem="https://wps.digital/wp-content/uploads/2016/10/maxresdefault.jpg"
        nome="pma765@hotmail.com"
        />

        <CardPequeno
        nome="Qs 6 Conj 610b N° 20"
        imagem="https://respostas.sebrae.com.br/wp-content/uploads/2020/03/localiza%C3%A7%C3%A3o-da-sua-empresa.png"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/50230603_2220407261332239_1242095861874294784_n.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=GKtUq9dxV6kAX_ghVef&_nc_ht=scontent.fymy1-1.fna&oh=a4e6b51e9673a725de0668b1f1fbd379&oe=5F8CA687" 
          nome="Agil Copiadoras" 
          descricao="Outsourcing de equipamentos reprograficos" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWvfHb57hpQs_DWTvauOZmlJ9P7FuaRUqQWg&usqp=CAU" 
          nome="Panelinhas do Brasil" 
          descricao="Franquia de restaurantes" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
