// src/pages/admin/PCategories/Edit.jsx
import React, {useEffect, useState} from 'react';
import api from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function PCatEdit(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [err, setErr] = useState('');
  const nav = useNavigate();

  useEffect(()=> {
    api.get(`/portfolio-categories/${id}`).then(r=>setItem(r.data)).catch(console.error);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/portfolio-categories/${id}`, { name: item.name, slug: item.slug });
      nav('/admin/portfolio-categories');
    } catch (error) {
      setErr(error?.response?.data?.message || 'Update failed');
    }
  };

  if (!item) return <div>Loading...</div>;
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
      {err && <div className="text-red-600 mb-3">{err}</div>}
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={item.name} onChange={e=>setItem({...item, name: e.target.value})} required
                 className="mt-1 w-full border rounded px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input value={item.slug || ''} onChange={e=>setItem({...item, slug: e.target.value})}
                 className="mt-1 w-full border rounded px-3 py-2"/>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Update</button>
          <button type="button" onClick={()=>nav('/admin/portfolio-categories')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
