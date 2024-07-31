import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [users, setUsers] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [Jobs, setJobs] = useState(0);

  useEffect(() => {
    // Function to animate increment
    const animateCount = (setValue, targetValue, duration = 2000) => {
      const start = 0;
      const increment = targetValue / (duration / 10); // Adjusted increment
      let current = start;
      const step = () => {
        current += increment;
        if (current >= targetValue) {
          setValue(targetValue);
        } else {
          setValue(Math.ceil(current));
          requestAnimationFrame(step); // Smooth animation using requestAnimationFrame
        }
      };
      requestAnimationFrame(step);
    };

    // Trigger animations for each stat
    animateCount(setUsers, 2400);
    animateCount(setSubscribers, 1120);
    animateCount(setDownloads, 720);
    animateCount(setJobs, 150);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-wrap text-center">
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">{users}</h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">{subscribers}</h2>
              <p className="leading-relaxed">Subscribers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">{downloads}</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">{Jobs}</h2>
              <p className="leading-relaxed">Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
