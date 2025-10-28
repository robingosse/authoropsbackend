
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/upload/:module', upload.single('file'), (req, res) => {
  console.log(`Received ${req.params.module} CSV:`, req.file.originalname);
  res.json({ status: 'ok', file: req.file.originalname });
});

app.get('/auth/:service', (req, res) => {
  const service = req.params.service;
  res.send(`Start OAuth flow for ${service}`);
});

app.listen(port, () => {
  console.log(`AuthorOps API running on http://localhost:${port}`);
});
