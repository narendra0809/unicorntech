// src/pages/admin/Layout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Link to={to} className="block px-3 py-2 rounded hover:bg-slate-100">{children}</Link>
);

export default function AdminLayout() {
  const logout = () => {
    localStorage.removeItem('admin_token');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </div>

        <nav className="p-4 space-y-1">
          <NavLink to="/admin/portfolio-categories">Portfolio Categories</NavLink>
          <NavLink to="/admin/portfolios">Portfolios</NavLink>
          <NavLink to="/admin/casestudies">Case Studies</NavLink>
          <NavLink to="/admin/ourteam">Our Team</NavLink>
          <NavLink to="/admin/clientreviews">Client Reviews</NavLink>
          <NavLink to="/admin/contacts">Contacts</NavLink>
        </nav>

        <div className="absolute bottom-6 left-4">
          <button onClick={logout} className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700">Logout</button>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
