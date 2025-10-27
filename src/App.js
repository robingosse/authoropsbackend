import React from 'react';
import Dashboard from './components/Dashboard.js';
export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <h2>AuthorOps</h2>
        <ul>
          <li>Dashboard</li>
          <li>Sales</li>
          <li>Ads</li>
          <li>Email</li>
          <li>AI Insights</li>
        </ul>
        <p>Today's Overview</p>
        <p>Overview to Date</p>
      </div>
      <Dashboard />
    </div>
  );
}