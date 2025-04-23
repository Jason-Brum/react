import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>
            Nome do usuário:
            <input
              type="text"
              name="displayName"
              required
              placeholder="Nome do usuário"
            />
          </span>
        </label>
        <label>
          <span>
            E-mail:
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
            />
          </span>
        </label>
        <label>
          <span>
            Senha:
            <input
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"
            />
          </span>
        </label>
        <label>
          <span>
            Confirmação de senha:
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme a sua senha"
            />
          </span>
        </label>
        <button className="btn">Cadastrar </button>
      </form>
    </div>
  );
};

export default Register;
