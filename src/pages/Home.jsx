import React from 'react';
import { clearData, loadData } from '../data/storage.js';

export default function Home({ data, setData }) {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>MatchForge MVP</h1>
      <p>Data is persisted locally in your browser using <strong>localStorage</strong>.</p>

      <div style={{ marginTop: 20, display: 'grid', gap: 12, maxWidth: 560 }}>
        <div>
          <strong>Users:</strong> {data.users.length}
        </div>
        <div>
          <strong>Teams:</strong> {data.teams.length}
        </div>
        <div>
          <strong>Matches:</strong> {data.matches.length}
        </div>
        <div>
          <strong>Tournaments:</strong> {data.tournaments.length}
        </div>
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button
          onClick={() => setData(loadData())}
          style={{ padding: '10px 16px', cursor: 'pointer' }}
        >
          Reload Data
        </button>
        <button
          onClick={() => setData(clearData())}
          style={{ padding: '10px 16px', cursor: 'pointer' }}
        >
          Reset Data
        </button>
      </div>

      <section style={{ marginTop: 32, maxWidth: 700 }}>
        <p style={{ color: '#555' }}>
          MatchForge data is currently managed in localstorage.
        </p>
      </section>
      <nav style={{ marginTop: 32 }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="#users">Users</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#matches">Matches</a></li>
          <li><a href="#tournaments">Tournaments</a></li>
        </ul>
      </nav>
    </div>
  );
}
