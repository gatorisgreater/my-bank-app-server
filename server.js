require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const alloyPublic = require('@api/alloy-public');
const workflow_token = process.env.WORKFLOW_TOKEN;
const workflow_secret = process.env.WORKFLOW_SECRET;

const PORT = process.env.PORT || 8080;

// Enables CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint
app.post('/api/apply', (req, res) => {
  
  const { firstName, lastName } = req.body;
  
  alloyPublic.auth(workflow_token, workflow_secret);
  
  alloyPublic.postEvaluations({name_first: firstName, name_last: lastName})

  .then(({ data }) => {
  
    return res.json({ summary: { outcome: data.summary.outcome } });

  })
  .catch(err => {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
