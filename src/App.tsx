import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Perfil from './pages/perfil/Perfil';
import ListaTemas from './components/formularioTema/ListaTemas';
import FormularioTema from './components/formularioTema/FormularioTema';
import DeletarTema from './components/formularioTema/DeletarTema';
import FormularioPostagem from './components/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/formularioPostagem/DeletarPostagem';
import Forum from './pages/forum/Forum';
import Navbar from './components/Navbar/Navbar';
import ListaPostagens from './components/formularioPostagem/ListaPostagens';

function App() {
  
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Navbar/>
          <div className='min-h-[80vh]'>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/forum" element={<Forum/>} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;