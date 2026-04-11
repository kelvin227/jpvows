"use client";
import FadeIn from "@/components/FadeIn";
import Countdown from "@/components/Countdown";

export default function HomePageComponent() {
    return(
        <main className="text-white min-h-[100dvh] bg-[url('/image1.jpeg')] bg-cover flex items-center justify-center">
      <div className="bg-black/60 p-10 rounded-xl text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Joy & Paul
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="italic text-lg text-gray-300">
            Love That Conquers All
          </p>
        </FadeIn>

        <FadeIn>
          <p className="mt-4 tracking-widest text-sm">
            APRIL 25TH, 2026 • LAGOS STATE
          </p>
        </FadeIn>

        <Countdown />
      </div>
    </main>
    )
}