import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { clearData, loadData, saveData } from './data/storage.js';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';

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
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/users" element={<Users data={data} setData={setData} />} />
        <Route path="/teams" element={<div>Teams</div>} />
        <Route path="/matches" element={<div>Matches</div>} />
        <Route path="/tournaments" element={<div>Tournaments</div>} />
      </Routes>
    </Router>
  );
}
