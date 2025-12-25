"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function WhyChooseUs() {
const content = [
  {
    title: "Comprehensive Beginner Music Courses",
    description:
      "Begin your musical journey with well-structured beginner music courses designed for students with no prior experience. Learn basic notes, rhythm, hand positioning, and foundational techniques through step-by-step lessons that make learning music simple, enjoyable, and confidence-building.",
  },
  {
    title: "Instrument Specialization & Skill Development",
    description:
      "Focus on mastering your chosen instrument such as guitar, piano, drums, or keyboard. These specialized courses help you develop proper technique, timing, and musical expression while gradually progressing from basic exercises to advanced playing styles.",
  },
  {
    title: "Learn from Professional & Certified Music Instructors",
    description:
      "Get trained by highly experienced and certified music instructors who bring real-world performance and teaching expertise. Our instructors provide personalized guidance, practical tips, and continuous feedback to help you grow as a musician.",
  },
  {
    title: "In-Depth Music Theory & Creative Composition",
    description:
      "Understand the core principles of music including scales, chords, harmony, and song structure. These courses empower students to read music, compose original pieces, and confidently apply theory to practical playing and songwriting.",
  },
  {
    title: "Professional Vocal Training & Voice Development",
    description:
      "Enhance your singing abilities with professional vocal training programs. Improve pitch accuracy, vocal range, breathing control, and voice strength through proven techniques suitable for beginners as well as advanced singers.",
  },
  {
    title: "Live Practice Sessions & Performance Experience",
    description:
      "Build stage confidence through guided practice sessions and performance-based learning. Participate in live sessions, recitals, and collaborative performances that help you apply your skills, overcome stage fear, and grow as a confident performer.",
  },
];


  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs