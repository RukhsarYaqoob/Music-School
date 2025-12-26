'use client'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Mastering Guitar Techniques for All Levels",
    description:
      "Join this featured webinar to learn essential guitar techniques, from basic chords to advanced strumming and fingerstyle patterns. Perfect for beginners and intermediate players looking to refine their skills.",
    link: "mastering-guitar-techniques",
  },
  {
    title: "Vocal Training & Voice Control Essentials",
    description:
      "Discover professional vocal techniques to improve pitch, tone, and breathing control. This webinar is designed for singers who want to strengthen their voice and perform with confidence.",
    link: "vocal-training-voice-control",
  },
  {
    title: "Understanding Music Theory Made Simple",
    description:
      "Learn the fundamentals of music theory in a clear and practical way. This webinar covers scales, chords, harmony, and how to apply theory to real music performance and composition.",
    link: "music-theory-made-simple",
  },
  {
    title: "Piano Performance & Practice Strategies",
    description:
      "Explore effective piano practice routines and performance techniques used by professionals. Ideal for students who want to improve accuracy, speed, and musical expression.",
    link: "piano-performance-strategies",
  },
  {
    title: "Introduction to Music Production & Recording",
    description:
      "Get introduced to the basics of music production, recording, and mixing. Learn how to use digital tools to create high-quality music from your home or studio setup.",
    link: "music-production-recording-basics",
  },
];

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold uppercase tracking-wide'>Featured Webinars</h2>
          <p className='mt-2 text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-white'>Enhance your Musical Journey</p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={featuredWebinars} />
        </div>
        <div className='mt-10 text-center'>
          <Link href={'/'}
          className='px-4 py-2 rounded border text-neutral-700 border-neutral-600 hover:bg-gray-100 bg-white'
          >
          View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars