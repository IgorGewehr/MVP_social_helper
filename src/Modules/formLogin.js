import React, { useState } from 'react';

const FormLogin = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples (exemplo)
    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
      alert('Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Envio dos dados para o servidor (substitua por API)
    

    // Limpar campos (opcional)
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div className='form_login'>
      <h1>Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <input type="password" name="confirmarSenha" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />

        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default FormLogin;
