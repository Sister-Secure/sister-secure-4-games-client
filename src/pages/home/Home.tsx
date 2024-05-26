import React from 'react';
import MyImage from '../../assets/imagens/home.jpg';
import logo from '../../assets/imagens/logo.png';
import NossaMissao from '../../assets/imagens/nossamissão.jpg';
import ListaPostagens from '../../components/formularioPostagem/ListaPostagens';

const Home = () => {
  return (
    <>
      <div className='bg-white min-h-screen relative'>
        {/* Imagem de fundo */}
        <div className="relative">
          <img
            src={MyImage}
            alt='Descrição da imagem'
            className='w-full h-auto object-cover opacity-70'
          />
          
          {/* Texto sobre a imagem */}
          <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/6 text-center text-white'>
            <p className='text-5xl font-bold'>
              Sister Secure 4 Games
            </p>
            <p className='text-lg font-bold mt-4'>
              Jogar é nosso direito, segurança é nossa missão.
            </p>
          </div>
        </div>

        {/* Logo no canto superior esquerdo */}
        <div className='absolute top-0 left-0 p-4'>
          <img src={logo} alt='Logo' className='w-80 h-auto' />
        </div>

        {/* Outros conteúdos da página */}
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10 space-x-2'>
          <div className='w-96'>
            <h1 className='font-bold text-orange-800 text-2xl mb-3'>
              Nossa Missão
            </h1>
            <p className='text-base text-orange-800'>
              Promover uma experiência de jogo inclusiva e segura para mulheres,
              atuando ativamente no monitoramento e endereçamento de denúncias
              de assédio, oferecendo ferramentas que permitem às jogadoras
              controlar seus níveis de interação e cultivando uma comunidade
              onde o respeito e o espírito esportivo sejam a base de cada
              encontro online.
              <br />
              Essa missão reflete o compromisso do projeto em criar um ambiente
              de jogo online onde as jogadoras possam se sentir protegidas e
              valorizadas, garantindo que a diversão e a segurança caminhem lado
              a lado.
            </p>
          </div>
          <div className='nossa-missao'>
            <img src={NossaMissao} alt='Nossa Missão' className='w-96' />
          </div>
        </div>

        {/* Imagem ao lado de ListaPostagens */}
        <div className='flex flex-row justify-center mb-8 items-center mt-10  '>
          <div className='ml-20 pr-0'>
            <ListaPostagens />
          </div>
          <div className=' mr-20 '>
            <img src='src/assets/imagens/depoimentos.png' alt='Imagem ao lado das postagens' className='w-dvw max-w-xl h-auto' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
