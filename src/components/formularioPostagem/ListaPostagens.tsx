/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Postagem from '../../models/Postagem';
import { buscar } from '../../services/Service';
import CardPostagem from './CardPostagem';
import { useNavigate } from 'react-router-dom';

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  let navigate = useNavigate();
  const { usuario, handleLogout,  } = useContext(AuthContext);
  const token = usuario.token;
  useEffect(() => {
    if (token === '') {
      window.alert('Você precisa estar logado');
      navigate('/');
    }
  }, [navigate, token]);
  async function buscarPostagens() {
    try {
      await buscar('/postagens', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        window.alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);
  return (
    <>
      <div className=' mr-0 my-4 flex flex-col gap-4 px-0 pr-0'>
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;
