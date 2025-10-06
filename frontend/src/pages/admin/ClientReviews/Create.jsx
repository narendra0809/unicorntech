// src/pages/admin/ClientReviews/Create.jsx
import React, {useState} from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';

export default function CRCreate(){
  const [form, setForm] = useState({ client_name:'', msg:'', from:'' });
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('client_name', form.client_name);
    fd.append('msg', form.msg);
    fd.append('from', form.from || '');
    if (image) fd.append('image', image);
    await api.post('/clientreviews', fd, { headers: {'Content-Type':'multipart/form-data'} });
    nav('/admin/clientreviews');
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Create Client Review</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Client Name</label>
          <input value={form.client_name} onChange={e=>setForm({...form,client_name:e.target.value})} required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">From</label>
          <input value={form.from} onChange={e=>setForm({...form,from:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={4} required></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])} className="mt-1" />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Create</button>
          <button type="button" onClick={()=>nav('/admin/clientreviews')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
