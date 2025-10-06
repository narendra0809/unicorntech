// src/pages/admin/CaseStudies/List.jsx
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';

function imgUrl(path) {
  const base = import.meta.env.REACT_APP_API_URL?.replace('/api','') || 'http://127.0.0.1:8000';
  return `${base}/storage/${path}`;
}

export default function CSList(){
  const [items, setItems] = useState([]);
  useEffect(()=> {
    api.get('/casestudies').then(r=>setItems(r.data)).catch(console.error);
  }, []);

  const remove = async (id) => {
    if (!window.confirm('Delete this case study?')) return;
    await api.delete(`/casestudies/${id}`);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Case Studies</h2>
        <Link to="/admin/casestudies/create" className="px-4 py-2 bg-indigo-600 text-white rounded">Create</Link>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Portfolio</th>
              <th className="px-4 py-2">Images</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t">
                <td className="px-4 py-3">{i.id}</td>
                <td className="px-4 py-3">{i.title}</td>
                <td className="px-4 py-3">{i.portfolio?.name}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {i.images?.slice(0,3).map((p,idx)=>(
                      <img key={idx} src={imgUrl(p)} className="w-20 h-12 object-cover rounded" alt="" />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Link to={`/admin/casestudies/edit/${i.id}`} className="text-indigo-600 mr-3">Edit</Link>
                  <button onClick={()=>remove(i.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
            {items.length===0 && <tr><td colSpan="5" className="px-4 py-6 text-center text-slate-500">No case studies</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
