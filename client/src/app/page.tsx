'use client';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

export default function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData('/api/projects')
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Freelancer Projects</h1>
      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.client} (due {p.deadline})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
