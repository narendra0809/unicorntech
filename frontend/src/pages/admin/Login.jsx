// src/pages/admin/Login.jsx
import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await api.post('/admin/login', { email, password });
      const token = res.data.token;
      if (!token) throw new Error('Invalid login response');
      localStorage.setItem('admin_token', token);
      navigate('/admin');
    } catch (error) {
      setErr(error?.response?.data?.message || error.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
        {err && <div className="mb-4 text-red-600">{err}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                   className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
                   className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
          </div>
          <div>
            <button className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
