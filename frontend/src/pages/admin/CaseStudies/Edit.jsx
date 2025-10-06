// src/pages/admin/CaseStudies/Edit.jsx
import React, {useEffect, useState} from 'react';
import api from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

function imgUrl(path) {
  const base = import.meta.env.VITE_API_URL?.replace('/api','') || 'http://127.0.0.1:8000';
  return `${base}/storage/${path}`;
}

export default function CSEdit(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [images, setImages] = useState([]); // new uploads
  const [techstack, setTechstack] = useState([]);
  const nav = useNavigate();

  useEffect(()=> {
    api.get(`/casestudies/${id}`).then(r=>{
      setItem(r.data);
      setTechstack(r.data.techstack || []);
    }).catch(console.error);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    const fields = ['portfolio_id','meta_title','meta_description','title','description','platform','services','industry','timeline','project_overview','challenges','solution','about'];
    fields.forEach(f => fd.append(f, item[f] ?? ''));
    techstack.filter(Boolean).forEach(t => fd.append('techstack[]', t));
    images.forEach(img => fd.append('images[]', img));
    await api.post(`/casestudies/${id}`, fd, { params: { _method: 'PUT' }});
    nav('/admin/casestudies');
  };

  if (!item) return <div>Loading...</div>;
  return (
    <div className="max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">Edit Case Study</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input value={item.title} onChange={e=>setItem({...item,title:e.target.value})} required className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Portfolio ID</label>
          <input value={item.portfolio_id} onChange={e=>setItem({...item,portfolio_id:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Techstack</label>
          {techstack.map((t,idx)=>(
            <div key={idx} className="flex gap-2 my-2">
              <input value={t} onChange={e=>setTechstack(prev=>prev.map((x,i)=>i===idx?e.target.value:x))} className="flex-1 border rounded px-3 py-2" />
              <button type="button" onClick={()=>setTechstack(prev=>prev.filter((_,i)=>i!==idx))} className="px-3 py-2 bg-red-100 rounded">Remove</button>
            </div>
          ))}
          <button type="button" onClick={()=>setTechstack(prev=>[...prev,''])} className="px-3 py-2 bg-indigo-50 rounded">Add</button>
        </div>

        <div>
          <label className="block text-sm font-medium">Existing Images</label>
          <div className="mt-2 flex gap-2">
            {item.images?.map((p,idx)=>(
              <img key={idx} src={imgUrl(p)} className="w-28 h-20 object-cover rounded" alt="" />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Add More Images</label>
          <input type="file" multiple accept="image/*" onChange={e=>setImages(Array.from(e.target.files))} className="mt-1" />
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Update</button>
          <button type="button" onClick={()=>nav('/admin/casestudies')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
