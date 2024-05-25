import React, { useState } from 'react';
import axios from 'axios';

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
      // Aqui você faria a requisição para cadastrar o usuário utilizando o axios
      await axios.post('/cadastrar', usuario);
      alert('Usuário cadastrado com sucesso!');
      // Limpar o formulário após o cadastro
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
    <div className="flex">
      <form
        onSubmit={handleSubmit}
        className="mr-4 flex flex-col max-w-xs"
      >
        <div className="mb-2">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={usuario.nome} onChange={handleChange} required className="border rounded p-1" />
        </div>
        <div className="mb-2">
          <label htmlFor="usuario">Usuário:</label>
          <input type="email" id="usuario" name="usuario" value={usuario.usuario} onChange={handleChange} required className="border rounded p-1" />
        </div>
        <div className="mb-2">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={usuario.senha} onChange={handleChange} required className="border rounded p-1" />
        </div>
        <div className="mb-2">
          <label htmlFor="foto">Foto:</label>
          <input type="text" id="foto" name="foto" value={usuario.foto} onChange={handleChange} className="border rounded p-1" />
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer">
          {loading ? 'Carregando...' : 'Cadastrar'}
        </button>
      </form>
      <div>
        {/* Card de pré-visualização da foto */}
        {usuario.foto && (
          <div className="border rounded p-4">
            <h2 className="mb-2">Pré-visualização da Foto</h2>
            <img src={usuario.foto} alt="Foto do usuário" className="max-w-xs max-h-40" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CadastroUsuario;
