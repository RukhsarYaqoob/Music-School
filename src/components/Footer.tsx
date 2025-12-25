import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6 lg:px-8">
    
    {/* About Music School */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">
        Music School
      </h3>
      <p className="text-base leading-relaxed">
        We offer professional music courses designed for beginners and advanced learners.
        Learn instruments, vocals, and music theory from experienced instructors in a
        creative and supportive environment.
      </p>
    </div>

    {/* Courses */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">
        Courses
      </h3>
      <ul className="space-y-2 text-sm">
        <li>Guitar & Bass Training</li>
        <li>Piano & Keyboard Lessons</li>
        <li>Vocal & Singing Classes</li>
        <li>Drum & Rhythm Courses</li>
        <li>Music Theory & Composition</li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">
        Resources
      </h3>
      <ul className="space-y-2 text-sm">
        <li>Online Webinars</li>
        <li>Practice Sessions</li>
        <li>Student Performances</li>
        <li>Learning Materials</li>
        <li>FAQs & Support</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">
        Contact Us
      </h3>
      <ul className="space-y-2 text-sm">
        <li>Email: info@musicschool.com</li>
        <li>Phone: +92 300 1234567</li>
        <li>Location: Online & Onsite Classes</li>
        <li>Mon – Sat: 10:00 AM – 8:00 PM</li>
      </ul>
    </div>
    

  </div>
  <p className='text-center text-base pt-10'>
    @2025 Music School All right reserved.
    </p>
</footer>

  )
}

export default Footer