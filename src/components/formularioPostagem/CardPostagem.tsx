// CardPostagem.js
import React from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../models/Postagem';

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div className='border-orange-500 bg-orange- border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className='flex w-full bg-orange-500 py-2 px-4 items-center gap-4'>
          <img src='src/assets/S.jpeg' className='h-12 rounded-full' alt='' />
          <h3 className='text-white font-light text-center uppercase'>
            {post.usuario?.nomeUsuario}
          </h3>
        </div>
        <div className='p-4'>
          <h4 className='text-lg text-orange-500 font-semibold uppercase'>
            {post.titulo}
          </h4>
          <p>{post.texto}</p>
          <p className='text-orange-500 uppercase'>Tema: {post.tema?.nome}</p>
          <p>
            Data:{' '}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(post.data))}
          </p>
        </div>
      </div>
      <div className='flex'>
        <Link
          to={`/editarPostagem/${post.id}`}
          className='w-full text-white bg-orange-500 hover:bg-orange-400 flex items-center justify-center py-2'
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarPostagem/${post.id}`}
          className='text-white bg-red-500 hover:bg-red-400 w-full flex items-center justify-center'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
