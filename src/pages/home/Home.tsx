import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MyImage from '../../assets/home.jpg';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white min-h-screen flex flex-col justify-center items-center relative'>
        <img
          src={MyImage}
          alt='Descrição da imagem'
          className='w-full h-auto object-cover opacity-70'
        />
        <div className='absolute top-0 left-0 p-4'>
          <img
            src={logo}
            alt='Logo'
            className='w-56 h-auto'
          />
        </div>
        
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10 space-x-2'>
  <div className='w-96'>
    <h1 className='font-bold text-orange-800 text-2xl mb-3'>Nossa Missão</h1>
    <p className='text-base text-orange-800'>
      Promover uma experiência de jogo inclusiva e segura para mulheres, atuando ativamente no monitoramento e endereçamento de denúncias de assédio, oferecendo ferramentas que permitem às jogadoras controlar seus níveis de interação e cultivando uma comunidade onde o respeito e o espírito esportivo sejam a base de cada encontro online."

      Essa missão reflete o compromisso do projeto em criar um ambiente de jogo online onde as jogadoras possam se sentir protegidas e valorizadas, garantindo que a diversão e a segurança caminhem lado a lado.
    </p>
  </div>
  <div className="nossa-missao">
    <img src={MyImage} alt="Nossa Missão" className="w-96" />
  </div>
</div>
      </div>
    </>
  );
};

export default Home;
