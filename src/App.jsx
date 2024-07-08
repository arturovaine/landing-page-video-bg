import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="sidebar">
        <div className="logo">Acesso</div>
        <form className="login-form">
          <label>
            <input type="text" name="login" placeholder="Login" />
          </label>
          <label>
            <input type="password" name="senha" />
          </label>
          <button type="submit">Entrar</button>
          <a href="#" className="forgot-password">Esqueci minha senha</a>
        </form>
        <a href="#" className="signup">Ainda não tem uma conta? Cadastre-se</a>
      </div>
    </div>
  );
}

export default App;
