// src/pages/admin/OurTeam/Edit.jsx
import React, {useEffect, useState} from 'react';
import api from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

function imgUrl(path){
  const base = import.meta.env.REACT_APP_API_URL?.replace('/api','') || 'http://127.0.0.1:8000';
  return `${base}/storage/${path}`;
}

export default function OurTeamEdit(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  useEffect(()=> {
    api.get(`/ourteam/${id}`).then(r=>setItem(r.data)).catch(console.error);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', item.name);
    fd.append('designation', item.designation || '');
    fd.append('bio', item.bio || '');
    if (image) fd.append('image', image);
    await api.post(`/ourteam/${id}`, fd, { params: { _method: 'PUT' }});
    nav('/admin/ourteam');
  };

  if (!item) return <div>Loading...</div>;
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Edit Team Member</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={item.name} onChange={e=>setItem({...item,name:e.target.value})} required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Designation</label>
          <input value={item.designation} onChange={e=>setItem({...item,designation:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea value={item.bio} onChange={e=>setItem({...item,bio:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Current Image</label>
          <div className="mt-2">
            {item.image ? <img src={imgUrl(item.image)} className="w-48 h-36 object-cover rounded" alt="" /> : <span className="text-slate-500">No image</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Replace Image</label>
          <input type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])} className="mt-1"/>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Update</button>
          <button type="button" onClick={()=>nav('/admin/ourteam')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
