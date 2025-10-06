// src/pages/admin/Portfolios/Edit.jsx
import React, {useEffect, useState} from 'react';
import api from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

function imgUrl(path) {
  const base = import.meta.env.REACT_APP_API_URL?.replace('/api','') || 'http://127.0.0.1:8000';
  return `${base}/storage/${path}`;
}

export default function PortfolioEdit(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  useEffect(()=> {
    api.get(`/portfolios/${id}`).then(r=>setItem(r.data)).catch(console.error);
    api.get('/portfolio-categories').then(r=>setCategories(r.data)).catch(console.error);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('portfolio_catregory_id', item.portfolio_catregory_id);
    fd.append('name', item.name);
    fd.append('slug', item.slug || '');
    fd.append('description', item.description || '');
    if (image) fd.append('image', image);
    await api.post(`/portfolios/${id}`, fd, { params: { _method: 'PUT' } });
    nav('/admin/portfolios');
  };

  if (!item) return <div>Loading...</div>;
  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-4">Edit Portfolio</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select value={item.portfolio_catregory_id} onChange={e=>setItem({...item,portfolio_catregory_id:e.target.value})}
            className="mt-1 w-full border rounded px-3 py-2" required>
            <option value="">Select category</option>
            {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={item.name} onChange={e=>setItem({...item,name:e.target.value})} required
                 className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Slug</label>
            <input value={item.slug || ''} onChange={e=>setItem({...item,slug:e.target.value})}
                   className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Replace Image</label>
            <input type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])} className="mt-1"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Current Image</label>
          <div className="mt-2">
            {item.image ? <img src={imgUrl(item.image)} alt="" className="w-48 h-32 object-cover rounded" /> : <span className="text-slate-500">No image</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea value={item.description || ''} onChange={e=>setItem({...item,description:e.target.value})}
                    className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Update</button>
          <button type="button" onClick={()=>nav('/admin/portfolios')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
