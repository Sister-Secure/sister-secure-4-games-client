/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'; 
import Tema from '../../models/Tema'; 
import { atualizar, buscar, cadastrar } from '../../services/Service';

function FormularioTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/temas`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
      } else {
        await cadastrar(`/temas`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
      }

      retornar();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  function retornar() {
    navigate('/temas');
  }

  useEffect(() => {
    if (token === '') {
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center text-orange-500 justify-center mx-auto" style={{ fontFamily: 'Comic Sans MS'}}>
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
        <div className="flex flex-col gap-2 text-orange-500">
          <label htmlFor="descricao">Descrição do tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-orange-500 hover:border-orange-400 rounded p-2"
            value={tema.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-white bg-orange-500 hover:bg-orange-400 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioTema;
