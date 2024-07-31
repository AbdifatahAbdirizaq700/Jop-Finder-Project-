import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-gray-800 text-white py-10">
    <div class="mx-auto max-w-6xl px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div>
          <h3 class="text-lg font-semibold">About Us</h3>
          <p class="mt-2 text-sm">
            JobFinder is a leading platform connecting job seekers with employers. Our mission is to help you find your dream job easily and efficiently.
          </p>
        </div>
  
      
        <div>
          <h3 class="text-lg font-semibold">Quick Links</h3>
          <ul class="mt-2 space-y-2">
            <li><a href="/about" class="text-sm hover:text-primary-500">About</a></li>
            <li><a href="/jobs" class="text-sm hover:text-primary-500">Find Jobs</a></li>
            <li><a href="/employers" class="text-sm hover:text-primary-500">Employers</a></li>
            <li><a href="/contact" class="text-sm hover:text-primary-500">Contact Us</a></li>
            <li><a href="/privacy-policy" class="text-sm hover:text-primary-500">Privacy Policy</a></li>
          </ul>
        </div>
  
       
        <div>
          <h3 class="text-lg font-semibold">Contact</h3>
          <p class="mt-2 text-sm">123 JobFinder Ave, Career City, CO 12345</p>
          <p class="text-sm">Email: support@jobfinder.com</p>
          <p class="text-sm">Phone: (123) 456-7890</p>
  
          <div class="mt-4">
            <h3 class="text-lg font-semibold">Follow Us</h3>
            <div class="flex space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" class="text-white hover:text-primary-500">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22 12a10 10 0 1 0-11 9.95v-7.08H8.6V12h2.4V9.65c0-2.37 1.43-3.67 3.57-3.67 1.03 0 2.12.18 2.12.18v2.32h-1.2c-1.18 0-1.54.73-1.54 1.48V12h2.6l-.42 2.87h-2.18v7.08A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" class="text-white hover:text-primary-500">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23 3.08a10 10 0 0 1-2.88.8 4.95 4.95 0 0 0 2.16-2.73 9.94 9.94 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.39 4.48A14 14 0 0 1 1.64 2.4 4.92 4.92 0 0 0 3.18 8.4a4.93 4.93 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.21.08 4.94 4.94 0 0 0 4.6 3.42A9.89 9.89 0 0 1 0 19.6a14 14 0 0 0 7.56 2.22c9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.43-.02-.64A10.06 10.06 0 0 0 23 3.08z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" class="text-white hover:text-primary-500">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21.94 21.94h-4.6v-6.63c0-1.59-.03-3.64-2.21-3.64-2.2 0-2.54 1.72-2.54 3.5v6.77H8v-13.5h4.4v1.85h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.48 3.05 5.48 7v6.99zM3.58 7.36a2.66 2.66 0 1 1 0-5.32 2.66 2.66 0 0 1 0 5.32zM1 21.94h5.16v-13.5H1v13.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2024 JobFinder. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer