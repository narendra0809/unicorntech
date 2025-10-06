// src/pages/admin/PCategories/List.jsx
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';

export default function PCatList() {
  const [items, setItems] = useState([]);
  useEffect(()=> {
    api.get('/portfolio-categories').then(r=>setItems(r.data)).catch(console.error);
  }, []);

  const remove = async (id) => {
    if (!window.confirm('Delete this category?')) return;
    await api.delete(`/portfolio-categories/${id}`);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Portfolio Categories</h2>
        <Link to="/admin/portfolio-categories/create" className="px-4 py-2 bg-indigo-600 text-white rounded">Create</Link>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Slug</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t">
                <td className="px-4 py-3">{i.id}</td>
                <td className="px-4 py-3">{i.name}</td>
                <td className="px-4 py-3">{i.slug}</td>
                <td className="px-4 py-3 text-center">
                  <Link to={`/admin/portfolio-categories/edit/${i.id}`} className="text-indigo-600 mr-3">Edit</Link>
                  <button onClick={()=>remove(i.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr><td colSpan="4" className="px-4 py-6 text-center text-slate-500">No categories yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
