import React from 'react'

function Header() {
  return (
    <div class="flex items-center justify-between p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center">
        <img src="https://placehold.co/40x40/eeeeee/4B5563/png?text=Logo" alt="Logo" class="mr-3 h-8" />
        <span class="text-2xl font-semibold text-gray-900 dark:text-white">MyWebsite</span>
    </div>
    <div class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-900 dark:text-white hover:underline">Home</a>
        <a href="/statistics" class="text-gray-900 dark:text-white hover:underline">statistics</a>
        <a href="/Services" class="text-gray-900 dark:text-white hover:underline">Services</a>
        <a href="/News" class="text-gray-900 dark:text-white hover:underline">News</a>
        <a href="/ContactUs" class="text-gray-900 dark:text-white hover:underline">ContactUs</a>
    </div>
    <div class="flex items-center">
        <button type="button" class="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
            <img src="https://placehold.co/40x40/eeeeee/4B5563/png?text=Profile" alt="Profile" class="w-full h-full object-cover" />
        </button>
    </div>
</div>
  )
}

export default Header