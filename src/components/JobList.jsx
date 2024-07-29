import React from 'react';

const JobList = () => {
  const jobs = [
    { title: 'Software Engineer', description: 'Develop and maintain software solutions.' },
    { title: 'Data Scientist', description: 'Analyze and interpret complex data.' },
    // Add more jobs as needed
  ];

  return (
    <div className="max-w-2xl mx-auto py-4">
      <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-700 mb-2">{job.description}</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
