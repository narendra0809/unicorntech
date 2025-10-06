import React, { useEffect, useState } from 'react';
import api from '../../../api';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from API
  useEffect(() => {
    api.get('/contacts')
      .then(res => {
        // Sort descending by id (latest first)
        const sorted = res.data.sort((a, b) => b.id - a.id);
        setContacts(sorted);
      })
      .catch(console.error);
  }, []);

  // Delete contact
  const remove = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    await api.delete(`/contacts/${id}`);
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Contact List</h2>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id} className="border-t">
                <td className="px-4 py-3">{contact.id}</td>
                <td className="px-4 py-3">{contact.name}</td>
                <td className="px-4 py-3">{contact.email}</td>
                <td className="px-4 py-3">{contact.phone}</td>
                <td className="px-4 py-3">{contact.subject}</td>
                <td className="px-4 py-3 max-w-xl truncate">{contact.message}</td>
                <td className="px-4 py-3">
                  <button onClick={() => remove(contact.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-slate-500">
                  No contacts
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

