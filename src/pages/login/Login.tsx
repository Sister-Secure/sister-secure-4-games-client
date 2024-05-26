import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { Spinner } from "@phosphor-icons/react";

import loginImage from '../../assets/imagens/login.jpg';

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        <img src={loginImage} alt="Imagem de Login" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative flex justify items-center h-full bg-opacity-50 p-10">
          <div className="flex justify-end items-center w-2/6">
          <form
            className="bg-blue-700 bg-opacity-60 p-10 rounded-lg shadow-lg w-full max-w-144 h-auto"
            onSubmit={login}
          >


              <h2 className="text-white text-2xl text-center mb-4">LOGIN</h2>
              <div className="flex flex-col mb-4 text-base">
                <label className="text-white" htmlFor="usuario">
                  Usuário
                </label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Digite seu e-mail de usuário"
                  className="border-2 border-white rounded p-2 mt-2 bg-transparent text-white"
                  value={usuarioLogin.usuario}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="flex flex-col mb-4 text-base">
                <label className="text-white" htmlFor="senha">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Digite sua senha"
                  className="border-2 border-white rounded p-2 mt-2 bg-transparent text-white"
                  value={usuarioLogin.senha}
                  onChange={atualizarEstado}
                />
              </div>
              <button
                type="submit"
                className="rounded bg-orange-500 bg-opacity-90 hover:bg-orange-600 text-white w-full py-2 transition-colors duration-300 ease-in-out mb-4"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <Spinner type="TailSpin" color="#ffffff" height={20} width={20} />
                  </div>
                ) : (
                  "Entrar"
                )}
              </button>
              <hr className="border-white w-full mb-4" />
              <p className="text-white text-center">
                Ainda não tem uma conta?{" "}
                <Link to="/cadastro" className="text-white font-bold hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
