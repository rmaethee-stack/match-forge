import React, { useEffect, useState } from 'react';
import { clearData, loadData, saveData } from './data/storage.js';

const initialData = {
  users: [],
  teams: [],
  matches: [],
  tournaments: [],
};

export default function App() {
  const [data, setData] = useState(initialData);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = loadData();
    setData(stored);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    saveData(data);
  }, [data, loaded]);

  if (!loaded) {
    return <div>Loading local data...</div>;
  }

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
          The app saves state automatically whenever the data changes. Use the browser Storage Inspector to inspect the stored JSON under the key <code>matchforge-data</code>.
        </p>
      </section>
    </div>
  );
}
