"use client";

import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "motion/react-client";
const cardsData = [
  {
    quote:
      "Joining this music school was one of the best decisions I’ve made. The guitar lessons are well-structured, easy to understand, and taught with great patience. The instructor always encourages practice and creativity, which helped me gain real confidence.",
    name: "Ayesha Khan",
    title: "Guitar Student",
  },
  {
    quote:
      "I started piano as a complete beginner, but the step-by-step teaching method made everything simple. The balance between theory and practice is excellent, and I can clearly see my improvement with every lesson.",
    name: "Ali Raza",
    title: "Piano Learner",
  },
  {
    quote:
      "The vocal training program completely transformed my singing skills. From breathing techniques to pitch control, every detail is explained clearly. The supportive environment helped me overcome stage fear and perform with confidence.",
    name: "Sara Ahmed",
    title: "Vocal Training Student",
  },
  {
    quote:
      "What I love most about this music school is the focus on overall musical growth. Music theory, composition, and live performance are perfectly combined, helping students become complete musicians.",
    name: "Usman Malik",
    title: "Music Theory Student",
  },
  {
    quote:
      "The drum classes are energetic and highly engaging. The instructor focuses on timing, rhythm, and real performance skills. Each session motivates me to practice more and push my limits.",
    name: "Hamza Noor",
    title: "Drum Course Student",
  },
  {
    quote:
      "Learning keyboard here feels inspiring and professional. The instructors are always available for guidance and feedback, and the learning environment truly encourages creativity and musical expression.",
    name: "Fatima Zahra",
    title: "Keyboard Student",
  },
];

function TestimonialsCards() {
  return (
    <div className="relative overflow-hidden h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2]">
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-center items-center",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      >
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
          Here our Harmony : Voices of Success
        </h2>
        <div className="w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={cardsData}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;
