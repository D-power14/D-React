import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './components/Contenido.js'
import './components/footer.js'
//importando componentes

import MiComponente from './components/Mi componente.js';


function HolaMundo(hola) {
  var hola = (
    <div> 
    <h2 className="Holi">Hola mundo</h2>
    <h3>Hola mundo!!!</h3>
  </div>
  )
  return hola
}

function Footer(footer) {
  var footer = ( 
    <footer className="footer"><p> pie de pagina</p></footer >
  )
  return footer
}

function App() {
  var hola = " "
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola a tu, Bienvenido a este paso en mi carrera
        </p>
        
        {HolaMundo(hola)}
        
      </header>
      
      <section className="componentes">
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>
      </section>
    </div>
  );
}

export default App;


