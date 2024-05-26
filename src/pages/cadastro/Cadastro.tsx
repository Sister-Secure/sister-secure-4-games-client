import React, { useState } from 'react';
import axios from 'axios';
import  cadastro from '../../assets/imagens/cadastro.jpg';

interface Usuario {
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
}

const CadastroUsuario: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/cadastrar', usuario);
      alert('Usuário cadastrado com sucesso!');

      setUsuario({
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        <img src={cadastro} alt="Imagem de Cadastro" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative flex justify-end items-center h-full bg-opacity-50 p-10">
          <div className="bg-blue-700 bg-opacity-60 p-10 rounded-lg shadow-lg w-full max-w-xl h-auto">
            <h2 className="text-white text-3xl mb-6 text-center">Cadastro</h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <label htmlFor="nome" className="block text-white text-lg">Nome:</label>
                <input type="text" id="nome" name="nome" value={usuario.nome} onChange={handleChange} required className="border-2 border-white rounded p-2 w-full bg-transparent text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="usuario" className="block text-white text-lg">Usuário:</label>
                <input type="email" id="usuario" name="usuario" value={usuario.usuario} onChange={handleChange} required className="border-2 border-white rounded p-2 w-full bg-transparent text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="senha" className="block text-white text-lg">Senha:</label>
                <input type="password" id="senha" name="senha" value={usuario.senha} onChange={handleChange} required className="border-2 border-white rounded p-2 w-full bg-transparent text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="foto" className="block text-white text-lg">Foto:</label>
                <input type="text" id="foto" name="foto" value={usuario.foto} onChange={handleChange} className="border-2 border-white rounded p-2 w-full bg-transparent text-white" />
              </div>
              <button type="submit" disabled={loading} className="rounded bg-orange-500 bg-opacity-90 hover:bg-orange-600 text-white w-full py-2 transition-colors duration-300 ease-in-out text-base">
                {loading ? 'Carregando...' : 'Cadastrar'}
              </button>
            </form>
            {usuario.foto && (
              <div className="border-2 border-white rounded p-2 mt-4">
                <h2 className="text-white mb-1">Pré-visualização da Foto</h2>
                <img src={usuario.foto} alt="Foto do usuário" className="max-w-xs max-h-32" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroUsuario;
