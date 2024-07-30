// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Sample job data
let jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    description: 'Develop and maintain web applications using React.',
    contract: 'Full Time',
    location: 'Remote',
    company: 'Dayon Tech',
  },
  {
    id: 2,
    title: 'Junior Angular Developer',
    description: 'Assist in the development of front-end web applications using Angular.',
    contract: 'Part Time',
    location: 'Hybrid',
    company: 'Tech Solutions',
  },
  // Add more job objects here
];

app.use(cors());
app.use(express.json());

// API endpoint to fetch all jobs
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

// API endpoint to fetch job by ID
app.get('/api/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
