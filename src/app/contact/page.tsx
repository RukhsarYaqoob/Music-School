import React from 'react'
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <h2 className='text-center font-bold text-6xl text-white'>Contact Us</h2>
      <div className='w-full max-w-3xl mx-auto pt-10'>
          <div className="bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 focus:outline-none focus:border-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Send Message
            </button>
             {/* Meaty part - Meteor effect */}        
          </form>         
        </div>      
      </div>
       <Meteors number={20} />
    </div>
  )
}

export default page