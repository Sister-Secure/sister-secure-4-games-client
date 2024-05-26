import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Usuario {
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
}

const PerfilUsuario: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    // Simulando uma requisição para obter os dados do usuário
    const fetchUsuario = async () => {
      try {
        const response = await axios.get<Usuario>('https://sistersecure4games.onrender.com/');
        setUsuario(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
        alert('Erro ao obter dados do usuário. Por favor, tente novamente mais tarde.');
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div className="max-w-xs mx-auto mt-8 border p-4 rounded bg-blue-200 text-blue-800">
      <h1 className="text-xl font-bold mb-4">Perfil do Usuário</h1>
      <div className="mb-2">
        <label className="font-semibold">Nome:</label>
        <p>{usuario.nome}</p>
      </div>
      <div className="mb-2">
        <label className="font-semibold">Usuário:</label>
        <p>{usuario.usuario}</p>
      </div>
      <div className="mb-2">
        <label className="font-semibold">Senha:</label>
        <p>{usuario.senha}</p>
      </div>
      <div className="mb-2">
        <label className="font-semibold">Foto:</label>
        {usuario.foto && <img src={usuario.foto} alt="Foto do usuário" className="w-full rounded" />}
      </div>
    </div>
  );
};

export default PerfilUsuario;
