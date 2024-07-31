// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Updated job data with new salary values
let jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    description: 'Develop and maintain web applications using React. Collaborate with designers and back-end developers to create high-quality user interfaces. Optimize applications for maximum speed and scalability.',
    contract: 'Full Time',
    location: 'Remote',
    company: 'Dayon Tech',
    salary: "$120,000 - $150,000" // Updated salary
  },
  {
    id: 2,
    title: 'Junior Angular Developer',
    description: 'Assist in the development of front-end web applications using Angular. Work closely with senior developers and learn best practices in coding and design. Participate in code reviews and team meetings.',
    contract: 'Part Time',
    location: 'Hybrid',
    company: 'Tech Solutions',
    salary: "$90,000 - $110,000" // Updated salary
  },
  {
    id: 3,
    title: 'Mid-level Vue Developer',
    description: 'Implement interactive front-end applications using Vue.js. Work with the design team to translate UI/UX designs into functional code. Maintain and improve existing Vue.js applications.',
    contract: 'Internship',
    location: 'On-site',
    company: 'Creative Minds',
    salary: "$70,000 - $90,000" // Updated salary
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    description: 'Develop both front-end and back-end components of web applications. Work with databases, servers, and APIs to create full-featured web apps. Collaborate with cross-functional teams to deliver high-quality software.',
    contract: 'Full Time',
    location: 'Remote',
    company: 'Innovatech',
    salary: "$130,000 - $160,000" // Updated salary
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    description: 'Design user interfaces and user experiences for web and mobile applications. Create wireframes, mockups, and prototypes. Conduct user research and testing to inform design decisions.',
    contract: 'Freelance',
    location: 'Remote',
    company: 'Design Studio',
    salary: "$100,000 - $130,000" // Updated salary
  },
  {
    id: 6,
    title: 'Data Scientist',
    description: 'Analyze large datasets to extract actionable insights. Build predictive models using machine learning techniques. Collaborate with business stakeholders to understand their data needs.',
    contract: 'Full Time',
    location: 'On-site',
    company: 'Data Insights Inc.',
    salary: "$140,000 - $180,000" // Updated salary
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    description: 'Manage and maintain the CI/CD pipeline for software deployment. Work with developers to ensure smooth and efficient software releases. Monitor system performance and troubleshoot issues.',
    contract: 'Full Time',
    location: 'Hybrid',
    company: 'CloudWorks',
    salary: "$120,000 - $150,000" // Updated salary
  },
  {
    id: 8,
    title: 'Backend Developer (Node.js)',
    description: 'Develop and maintain server-side logic using Node.js. Build APIs and manage databases. Work with front-end developers to integrate user-facing elements with server-side logic.',
    contract: 'Full Time',
    location: 'Remote',
    company: 'Backend Solutions',
    salary: "$110,000 - $140,000" // Updated salary
  },
  {
    id: 9,
    title: 'Product Manager',
    description: 'Oversee the development and launch of new products. Define product strategy and roadmap. Work with cross-functional teams to ensure successful product delivery.',
    contract: 'Full Time',
    location: 'On-site',
    company: 'Product Innovations',
    salary: "$130,000 - $160,000" // Updated salary
  },
  {
    id: 10,
    title: 'Marketing Specialist',
    description: 'Plan and execute marketing campaigns to promote products and services. Analyze market trends and customer behavior to inform marketing strategies. Collaborate with the sales team to achieve business goals.',
    contract: 'Part Time',
    location: 'Hybrid',
    company: 'Marketing Solutions',
    salary: "$80,000 - $100,000" // Updated salary
  },
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
