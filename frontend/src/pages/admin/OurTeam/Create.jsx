// src/pages/admin/OurTeam/Create.jsx
import React, {useState} from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';

export default function OurTeamCreate(){
  const [form, setForm] = useState({ name:'', designation:'', bio:'' });
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('designation', form.designation);
    fd.append('bio', form.bio);
    if (image) fd.append('image', image);
    await api.post('/ourteam', fd, { headers: {'Content-Type':'multipart/form-data'} });
    nav('/admin/ourteam');
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Create Team Member</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Designation</label>
          <input value={form.designation} onChange={e=>setForm({...form,designation:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea value={form.bio} onChange={e=>setForm({...form,bio:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])} className="mt-1"/>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Create</button>
          <button type="button" onClick={()=>nav('/admin/ourteam')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
