import React, { useState } from 'react';
import ListaPostagens from '../../components/formularioPostagem/ListaPostagens';
import logo from '../../assets/imagens/logo.png';

function Forum() {
  const [, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  return (
    <>
      <div className='bg-white min-h-screen relative'>
        {/* Imagem de fundo */}
        <div className="relative">
          <img
            src='src/assets/imagens/forum.jpg'
            alt='Descrição da imagem'
            className='w-full h-auto object-cover opacity-70'
          />
          
          {/* Texto sobre a imagem */}
          <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/6 text-center text-white'>
            <p className='text-5xl font-bold'>
              Fórum
            </p>
            <p className='text-lg font-bold mt-4'>
              Sua voz importa, seu jogo importa.
            </p>
          </div>
        </div>

        {/* Logo no canto superior esquerdo */}
        <div className='absolute top-0 left-0 p-4'>
          <img src={logo} alt='Logo' className='w-40 h-auto' />
        </div>
        <div className=''>
        {/* Botões com hover */}
        <div className='flex justify-center items-center mt-10 space-x-4'>
        <button
          className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'
          onClick={handleButtonClick}
        >
          Cadastrar Postagem
        </button>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Todos
          </button>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Assédio
          </button>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Bullying
          </button>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Violência Psicológica
          </button>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Prevenção
          </button>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Team-up
          </button>
        </div>

        {/* Conteúdo do fórum */}
        <div className='flex flex-row justify-center mb-8 items-center mt-10  '>
          <div className='ml-56 pr-0'>
            <ListaPostagens />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
