/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar, atualizar, cadastrar } from '../../services/Service';
import Tema from '../../models/Tema';
import Postagem from '../../models/Postagem';

function FormularioPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [temas, setTemas] = useState<Tema[]>([]);
  const [tema, setTema] = useState<Tema>({ id: 0, nome: '' });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null,
  });

  async function buscarPostagemPorId(id: string) {
    await buscar(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemaPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemas() {
    await buscar('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
    if (id !== undefined) {
      buscarPostagemPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/postagens');
  }

  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ postagem });

    if (id != undefined) {
      try {
        await atualizar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        }
      }
    } else {
      try {
        await cadastrar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        }
      }
    }
  }

  const carregandoTema = tema.nome === '';

  return (
    <div className="container flex flex-col mx-auto items-center bg-orange-100 " style={{ fontFamily: 'Comic Sans MS'}}>
      <h1 className="text-4xl text-center my-8 text-orange-500">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>

      <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2 text-orange-500">
          <label htmlFor="titulo">Titulo da postagem</label>
          <input
            value={postagem.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-orange-500 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2 text-orange-500">
          <label htmlFor="titulo">Texto da postagem</label>
          <input
            value={postagem.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-orange-500 rounded p-2 text-orange-500"
          />
        </div>
        <div className="flex flex-col gap-2 text-orange-500">
          <p>Tema da postagem</p>
          <select name="tema" id="tema" className='border p-2 border-orange-500 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um tema</option>
            {temas.map((tema) => (
              <option key={tema.id} value={tema.id}>{tema.nome}</option>
            ))}
          </select>
        </div>
        <button disabled={carregandoTema} type='submit' className='rounded disabled:bg-slate-200 bg-orange-500 hover:bg-orange-400 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioPostagem;
