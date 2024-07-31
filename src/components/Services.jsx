import React from 'react'

function Services() {
  return (
    <div class="bg-gray-200 px-2 py-10">
  <div id="features" class="mx-auto max-w-6xl">
    <p class="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Find Your Dream Job Today
    </h2>
    <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" class="mx-auto h-10 w-10" />
        <h3 class="my-3 font-display font-medium">Powered by AI</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          Utilize advanced AI technology to match you with the perfect job opportunities.
        </p>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530442/port-detection.svg" alt="" class="mx-auto h-10 w-10" />
        <h3 class="my-3 font-display font-medium">User-Friendly Interface</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          Easily navigate through job listings and apply with a few clicks.
        </p>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" class="mx-auto h-10 w-10" />
        <h3 class="my-3 font-display font-medium">Custom Search Filters</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          Tailor your job search with filters for location, industry, and job type.
        </p>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/pricing" class="group">
          <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" class="mx-auto h-10 w-10" />
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Start Free Trial</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">
            Experience our service with a free trial, no commitment required.
          </p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/templates" class="group">
          <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" class="mx-auto h-10 w-10" />
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
            Job Search Templates
          </h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">
            Access a variety of job application templates to enhance your resume.
          </p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/download" class="group">
          <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" class="mx-auto h-10 w-10" />
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Cross-Platform Compatibility</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">
            Use our platform seamlessly across Web, Mobile, and Desktop devices.
          </p>
        </a>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Services