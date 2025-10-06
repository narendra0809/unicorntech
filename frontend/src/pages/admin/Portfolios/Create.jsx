// src/pages/admin/Portfolios/Create.jsx
import React, {useState, useEffect} from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';

export default function PortfolioCreate(){
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ portfolio_catregory_id:'', name:'', slug:'', description:'' });
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  useEffect(()=> {
    api.get('/portfolio-categories').then(r=>setCategories(r.data)).catch(console.error);
  },[]);

  const handleFile = e => setImage(e.target.files[0]);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('portfolio_catregory_id', form.portfolio_catregory_id);
    fd.append('name', form.name);
    fd.append('slug', form.slug);
    fd.append('description', form.description);
    if (image) fd.append('image', image);
    await api.post('/portfolios', fd, { headers: { 'Content-Type': 'multipart/form-data' }});
    nav('/admin/portfolios');
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-4">Create Portfolio</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select required value={form.portfolio_catregory_id} onChange={e=>setForm({...form,portfolio_catregory_id:e.target.value})}
            className="mt-1 w-full border rounded px-3 py-2">
            <option value="">Select category</option>
            {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required
                 className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Slug</label>
            <input value={form.slug} onChange={e=>setForm({...form,slug:e.target.value})}
                   className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Image</label>
            <input type="file" accept="image/*" onChange={handleFile} className="mt-1"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})}
                    className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Create</button>
          <button type="button" onClick={()=>nav('/admin/portfolios')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
