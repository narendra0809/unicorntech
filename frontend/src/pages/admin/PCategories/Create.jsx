// src/pages/admin/PCategories/Create.jsx
import React, {useState} from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';

export default function PCatCreate() {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/portfolio-categories', { name, slug });
      nav('/admin/portfolio-categories');
    } catch (error) {
      setErr(error?.response?.data?.message || 'Error creating');
    }
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Create Category</h2>
      {err && <div className="text-red-600 mb-3">{err}</div>}
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} required
                 className="mt-1 w-full border rounded px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Slug (optional)</label>
          <input value={slug} onChange={e=>setSlug(e.target.value)}
                 className="mt-1 w-full border rounded px-3 py-2"/>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
          <button type="button" onClick={()=>nav('/admin/portfolio-categories')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
