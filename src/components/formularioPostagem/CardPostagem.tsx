import React from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../models/Postagem';

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div
      className='border-blue-700 bg-orange- border flex flex-col rounded overflow-hidden'
      style={{ width: '80%', textAlign: 'left', marginTop: '20px', marginBottom: '20px' }}
    >
      <div className='flex bg-blue-700 py-2 px-4 items-center gap-4'>
        <img src='src/assets/S.jpeg' className='h-12 rounded-full' alt='' />
        <h3 className='text-white font-light text-center uppercase'>
          {post.usuario?.nome}
        </h3>
      </div>
      <div className='flex flex-row p-4'>
        <div className='flex-1'>
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
          className='w-full text-white bg-blue-700 hover:bg-blue-500 flex items-center justify-center py-2'
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarPostagem/${post.id}`}
          className='text-white bg-orange-400 hover:bg-red-400 w-full flex items-center justify-center py-2'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
