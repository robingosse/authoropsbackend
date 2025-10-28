const express = require('express');
const path = require('path');
const app = express();

// Let Render assign a port, fallback to 10000 for local dev
const PORT = process.env.PORT || 10000;

// Serve static assets (JS, CSS, HTML, etc.) from the root
app.use(express.static(__dirname));

// Sample API route to confirm backend is alive
app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is alive', timestamp: new Date().toISOString() });
});

// Catch-all: route everything else to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ AuthorOps backend is running on port ${PORT}`);
});
