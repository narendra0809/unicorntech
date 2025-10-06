// src/pages/admin/CaseStudies/Create.jsx
import React, {useEffect, useState} from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';

export default function CSCreate(){
  const [portfolios, setPortfolios] = useState([]);
  const [form, setForm] = useState({ portfolio_id:'', title:'', meta_title:'', meta_description:'', description:'', platform:'', services:'', industry:'', timeline:'', project_overview:'', challenges:'', solution:'', about:'' });
  const [images, setImages] = useState([]);
  const [techstack, setTechstack] = useState(['']);
  const nav = useNavigate();

  useEffect(()=> {
    api.get('/portfolios').then(r=>setPortfolios(r.data)).catch(console.error);
  },[]);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k,v]) => v !== undefined && fd.append(k, v));
    techstack.filter(Boolean).forEach(t => fd.append('techstack[]', t));
    images.forEach(img => fd.append('images[]', img));
    await api.post('/casestudies', fd, { headers: { 'Content-Type': 'multipart/form-data' }});
    nav('/admin/casestudies');
  };

  return (
    <div className="max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">Create Case Study</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium">Portfolio</label>
          <select value={form.portfolio_id} onChange={e=>setForm({...form,portfolio_id:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" required>
            <option value="">Select</option>
            {portfolios.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Platform</label>
            <input value={form.platform} onChange={e=>setForm({...form,platform:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Meta Title</label>
          <input value={form.meta_title} onChange={e=>setForm({...form,meta_title:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Meta Description</label>
          <textarea value={form.meta_description} onChange={e=>setForm({...form,meta_description:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={2}></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Techstack</label>
          {techstack.map((t,idx)=>(
            <div key={idx} className="flex gap-2 my-2">
              <input value={t} onChange={e=>setTechstack(prev=>prev.map((x,i)=>i===idx?e.target.value:x))} className="flex-1 border rounded px-3 py-2" />
              <button type="button" onClick={()=>setTechstack(prev=>prev.filter((_,i)=>i!==idx))} className="px-3 py-2 bg-red-100 rounded">Remove</button>
            </div>
          ))}
          <button type="button" onClick={()=>setTechstack(prev=>[...prev,''])} className="px-3 py-2 bg-indigo-50 rounded">Add Tech</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Timeline</label>
            <input value={form.timeline} onChange={e=>setForm({...form,timeline:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Industy</label>
            <input value={form.industry} onChange={e=>setForm({...form,timeline:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Services</label>
            <input value={form.services} onChange={e=>setForm({...form,services:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Project Overview</label>
          <textarea value={form.project_overview} onChange={e=>setForm({...form,project_overview:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={3}></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Challenges</label>
            <textarea value={form.challenges} onChange={e=>setForm({...form,challenges:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={3}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Solution</label>
            <textarea value={form.solution} onChange={e=>setForm({...form,solution:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={3}></textarea>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">About</label>
          <textarea value={form.about} onChange={e=>setForm({...form,about:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={2}></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Images (multiple)</label>
          <input type="file" multiple accept="image/*" onChange={e=>setImages(Array.from(e.target.files))} className="mt-1" />
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Create</button>
          <button type="button" onClick={()=>nav('/admin/casestudies')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
