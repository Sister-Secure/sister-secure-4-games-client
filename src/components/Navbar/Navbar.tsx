import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-orange-500 flex justify-center items-center">
      <div className="flex-1">
        <a className="btn btn-ghost text-white text-xl">Sister Secure 4 Games</a>
      </div>
      <div className="text-white text-center flex-1 space-x-4 ">
        <h1 className="text-xl font-bold my-4 btn btn-ghost"><a href="/inicio">Início</a></h1>
        <h1 className="text-xl font-bold my-4 btn btn-ghost"><a href="/forum">Fórum</a></h1>
        <h1 className="text-xl font-bold my-4 btn btn-ghost"><a href="/contato">Contato</a></h1>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="/perfil" className="justify-between">
                Perfil
              </a>
            </li>
            <li>
              <a href="/minhaspostagens">Minhas Postagens</a>
            </li>
            <li>
              <a href="/login">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
