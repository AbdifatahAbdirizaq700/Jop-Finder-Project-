import React from 'react';

const Statistics = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-wrap text-center">
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">2400</h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">1120</h2>
              <p className="leading-relaxed">Subscribers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">720</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">150</h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
