const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files
app.use(express.static(__dirname));

// Sample endpoint
app.get("/api/status", (req, res) => {
  res.json({ status: "Backend is alive" });
});

// Fallback to index.html for frontend routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
