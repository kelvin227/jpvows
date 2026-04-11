"use client";
import FadeIn from "@/components/FadeIn";

export default function Story() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl font-serif mb-6">Our Story</h1>
          <p className="text-gray-300">
            Our journey began with a simple hello and blossomed into a love that
            continues to grow every day...
          </p>
        </FadeIn>

        <div className="w-full justify-center items-center mt-10 flex flex-col gap-10">
          <div className="">
               {/* the first card */}
          <div className="image-card sm:w-60 w-60 rotate-[-8deg]">
            <div className="w-50 h-50 bg-[url('/image4.jpeg')] bg-cover mb-4 p-5">
            </div>
            <div className="text-black mb-10">
              10 | 03 | 2025
            </div>
            </div>
            </div>
           


          <div className="mb-5">
            <p>
              We met at an art walk in Seattle, literally bumping into each
              other. We started hiking together, a lot. We both love the PNW,
              the mountains, the coast, everything. We’d be out on trails, just
              hanging out, talking around a fire. It clicked. We were on the
              same wavelength. One time, we were hiking and I complained about
              my boots and Jenny just stopped and started tying my laces for me.
              That's when I knew. It wasn't some grand gesture. It was
              just...us.
            </p>
            <p>
              We’ve built a life together. It’s chill, it’s real. We love
              low-key adventures, but also appreciate good wine with friends.
              From those first hikes to figuring out life together under
              countless starry skies, we've always found our best moments in the
              wild.
            </p>
          </div>
          <div className="relative w-[300px] h-[400px] mx-auto">
               {/* the first card */}
          <div className="image-card left-10 sm:w-60 w-60 absolute rotate-[-8deg]">
            <div className="w-50 h-50 bg-[url('/image5.jpeg')] bg-cover mb-4 p-5">
            </div>
            <div className="text-black mb-10">
              10 | 03 | 2025
            </div>
            
            </div>

            {/* the second card */}

            <div className="image-card sm:w-60 w-60 absolute top-50 left-15 rotate-[8deg]">
            <div className="w-50 h-50 bg-[url('/image3.jpeg')] bg-cover mb-4 p-5">
            </div>
            <div className="text-black mb-10">
              10 | 03 | 2025
            </div>
            
            </div>
          </div>
                    <div className="mb-5">
            <p>
              We met at an art walk in Seattle, literally bumping into each
              other. We started hiking together, a lot. We both love the PNW,
              the mountains, the coast, everything. We’d be out on trails, just
              hanging out, talking around a fire. It clicked. We were on the
              same wavelength. One time, we were hiking and I complained about
              my boots and Jenny just stopped and started tying my laces for me.
              That's when I knew. It wasn't some grand gesture. It was
              just...us.
            </p>
            <p>
              We’ve built a life together. It’s chill, it’s real. We love
              low-key adventures, but also appreciate good wine with friends.
              From those first hikes to figuring out life together under
              countless starry skies, we've always found our best moments in the
              wild.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
