import React from 'react';
import googleLogo from '../Assets/google.svg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../Assets/background_login.jpg'; // Importando a imagem de fundo

const LoginPage = () => {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-content">
            <h2 className="login-title">Bem-vindo de volta!</h2>
            <div className="login-button-container">
              <button onClick={console.log("test")} className="login-btn">
                Fazer Login
              </button>
              <button onClick={console.log("test")} className="cna-btn">
                Criar Conta
              </button>
            </div>
          </div>
          <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
        </div>
      </div>
    );
  };

export default LoginPage;
