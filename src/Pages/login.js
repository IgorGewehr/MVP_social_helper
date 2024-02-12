import React from 'react';
import googleLogo from '../Assets/google.svg.png';
import backgroundImage from '../Assets/background_login.jpg'; // Importando a imagem de fundo
//import './App.css'; // Arquivo de estilos

const LoginPage = () => {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-content">
            <h2 className="login-title">Bem-vindo de volta!</h2>
            <p className="login-subtitle">Faça login com sua conta:</p>
            <div className="login-button-container">
              <button onClick={console.log("test")} className="google-login-btn">
                <img src={googleLogo} alt="Google Logo" className="google-logo" />
                Continuar com Google
              </button>
            </div>
          </div>
          <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
        </div>
      </div>
    );
  };

export default LoginPage;
