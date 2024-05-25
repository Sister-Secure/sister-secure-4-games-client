import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { Spinner } from "@phosphor-icons/react";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

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
    <div className="flex justify-center items-center h-screen bg-white">
      <form className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg w-80" onSubmit={login}>
        <h2 className="text-white text-5xl text-center mb-6">LOGIN</h2>
        <div className="flex flex-col mb-4">
          <label className="text-white" htmlFor="usuario">
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Digite seu e-mail de usuário"
            className="border-2 border-white rounded p-2 mt-2 bg-transparent"
            value={usuarioLogin.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-white" htmlFor="senha">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            className="border-2 border-white rounded p-2 mt-2 bg-transparent"
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-verde-escuro hover:bg-verde-medio-hover text-white w-full py-2 transition-colors duration-300 ease-in-out mb-4"
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Spinner
                type="TailSpin"
                color="#ffffff"
                height={50}
                width={50}
              />
            </div>
          ) : (
            <span>Entrar</span>
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
  );
}

export default Login;
