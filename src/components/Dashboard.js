import React from 'react';
export default function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', flexGrow: 1 }}>
      <div className="panel">Overview</div>
      <div className="panel">Key Metrics</div>
      <div className="panel">KDP Sales</div>
      <div className="panel">Meta Ads</div>
      <div className="panel">Google Ads</div>
      <div className="panel">Email</div>
      <div className="panel">Reviews</div>
      <div className="panel">AI Insights</div>
    </div>
  );
}