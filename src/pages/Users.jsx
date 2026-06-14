import React, { useState } from 'react';

export default function Users({ data, setData }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.type || formData.age <= 0) {
      alert('Please fill in all fields');
      return;
    }

    const newUser = {
      id: Date.now(),
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      type: formData.type,
      age: formData.age,
    };

    setData((prev) => ({
      ...prev,
      users: [...prev.users, newUser],
    }));

    setFormData({ firstName: '', lastName: '', email: '', type: '', age: '' });
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Users</h1>

      <form onSubmit={handleAddUser} style={{ marginTop: 20, maxWidth: 400 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: 4,
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: 4,
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: 4,
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: 4,
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Type:
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: 4,
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            >
              <option value="">Select Type</option>
              <option value="coach">Coach</option>
              <option value="official">Official</option>
              <option value="player">Player</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add User
        </button>
      </form>

      <section style={{ marginTop: 32 }}>
        <h2>Users List ({data.users.length})</h2>
        {data.users.length === 0 ? (
          <p style={{ color: '#666' }}>No users yet. Add one using the form above.</p>
        ) : (
          <table
            style={{
              width: '100%',
              maxWidth: 600,
              borderCollapse: 'collapse',
              marginTop: 16,
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: 12 }}>{user.firstName} {user.lastName}</td>
                  <td style={{ padding: 12 }}>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}