// src/pages/admin/ClientReviews/List.jsx
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';

function imgUrl(path){
  const base = import.meta.env.VITE_API_URL?.replace('/api','') || 'http://127.0.0.1:8000';
  return `${base}/storage/${path}`;
}

export default function CRList(){
  const [items, setItems] = useState([]);
  useEffect(()=> {
    api.get('/clientreviews').then(r=>setItems(r.data)).catch(console.error);
  }, []);

  const remove = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    await api.delete(`/clientreviews/${id}`);
    setItems(prev=>prev.filter(i=>i.id!==id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Client Reviews</h2>
        <Link to="/admin/clientreviews/create" className="px-4 py-2 bg-indigo-600 text-white rounded">Create</Link>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i=>(
              <tr key={i.id} className="border-t">
                <td className="px-4 py-3">{i.id}</td>
                <td className="px-4 py-3">{i.client_name}</td>
                <td className="px-4 py-3">{i.from}</td>
                <td className="px-4 py-3 max-w-xl truncate">{i.msg}</td>
                <td className="px-4 py-3">{i.image ? <img src={imgUrl(i.image)} className="w-24 h-16 object-cover rounded" alt="" /> : '-'}</td>
                <td className="px-4 py-3">
                  <Link to={`/admin/clientreviews/edit/${i.id}`} className="text-indigo-600 mr-3">Edit</Link>
                  <button onClick={()=>remove(i.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
            {items.length===0 && <tr><td colSpan="6" className="px-4 py-6 text-center text-slate-500">No reviews</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
