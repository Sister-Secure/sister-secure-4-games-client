/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar, deletar } from '../../services/Service';
import Postagem from '../../models/Postagem';

function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/postagens");
  }

  async function deletarPostagem() {
    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error('Erro ao apagar a Postagem:', error);
    }
    retornar();
  }

  return (
    <div className='container w-1/3 mx-auto' style={{ fontFamily: 'Comic Sans MS' }}>
      <h1 className='text-4xl text-center my-4 text-orange-500'>Deletar postagem</h1>

      <p className='text-center font-semibold mb-4 text-orange-500'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-orange-500 text-white font-bold text-2xl'>Postagem</header>
        <div className="p-4 bg-orange-100 text-orange-500">
          <p className='text-xl h-full'>{postagem.titulo}</p>
          <p>{postagem.texto}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-600 hover:bg-red-400 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-green-500 hover:bg-green-400 flex items-center justify-center' onClick={deletarPostagem}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
