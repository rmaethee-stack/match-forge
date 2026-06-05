const STORAGE_KEY = 'matchforge-data';

const defaultData = {
  users: [
    {
      id: 'user-1',
      name: 'Alice',
      age: '28',
      type: 'player',
    },
    {
      id: 'user-2',
      name: 'Jordan',
      age: '34',
      type: 'coach',
    },
    {
      id: 'user-3',
      name: 'Sam',
      age: '41',
      type: 'official',
    },
  ],
  teams: [
    {
      id: 'team-1',
      name: 'Red Rockets',
      coachId: 'user-2',
      members: ['user-1'],
    },
  ],
  matches: [
    {
      id: 'match-1',
      teamAId: 'team-1',
      teamBId: 'team-1',
      date: new Date().toISOString(),
      officialId: 'user-3',
      result: 'draw',
    },
  ],
  tournaments: [
    {
      id: 'tournament-1',
      teamIds: ['team-1'],
      matchIds: ['match-1'],
    },
  ],
};

export function loadData() {
  if (typeof window === 'undefined') {
    return defaultData;
  }

  const value = window.localStorage.getItem(STORAGE_KEY);
  if (!value) {
    return defaultData;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn('Failed to parse stored data:', error);
    return defaultData;
  }
}

export function saveData(data) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function clearData() {
  if (typeof window === 'undefined') {
    return defaultData;
  }

  window.localStorage.removeItem(STORAGE_KEY);
  return defaultData;
}
