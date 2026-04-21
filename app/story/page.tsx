"use client";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

export default function Story() {
  const [story, setStory] = useState("paul");
  const paulStory = `Funny enough, our story started online… and as they say, “no real love is found online,” but clearly, our case decided to prove them wrong. I had reached out to her at some point, sent a message, and… nothing. No reply. Silence. At that moment, I just assumed it was one of those messages that would never see the light of day again. Fast forward about two months later — out of nowhere, I get a message. And just like that, what seemed like a closed chapter suddenly opened. From that unexpected reply, conversations began to flow. What started as a simple chat turned into long talks, laughter, and a connection neither of us saw coming. It felt natural, easy, and surprisingly deep. Before we knew it, the bond grew stronger. What began as a delayed response became perfect timing. We realized that sometimes, love doesn’t come when you expect it — it comes when it’s meant to. And today, we can confidently say that even online, love can find you… especially when it’s real.`;
  const joyStory = `Our story began in March 2021, when he reached out to me on Facebook. At the time, I was in a relationship, so I didn’t give his message much attention.

A few months later, in September, life had changed—I had just come out of that relationship and wasn’t ready to start something new. Still, I decided to reply to his earlier message, and we began to talk.

What started as a simple conversation gradually grew into a meaningful friendship, and before long, something deeper began to blossom. We chose to take things slowly, building our relationship on faith and allowing God to guide every step of our journey.

Over the years, our love grew stronger and more intentional. Then, in February 2025, he asked the most important question—and I said a joyful “yes” to forever.`
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
              <div className="w-50 h-50 bg-[url('/image4.jpeg')] bg-cover mb-4 p-5"></div>
              <div className="text-black mb-10">10 | 03 | 2025</div>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-center gap-10 mb-5 bg-white text-black p-3 rounded-lg rounded-full w-max mx-auto">
              <div className={story === "paul" ? "bg-black text-white p-2 rounded-lg" : "text-black p-2 rounded-lg"} onClick={() => setStory("paul")}>
                Paul's Story
              </div>
              <div className={story === "joy" ? "bg-black text-white p-2 rounded-lg" : "text-black p-2 rounded-lg"} onClick={() => setStory("joy")}>
                Joy's Story
              </div>
            </div>
            <h1>💍 How We Met</h1>
            <p>
              {story === "paul" ? paulStory : joyStory}
            </p>
           
          </div>
          <div className="relative w-[300px] h-[400px] mx-auto">
            {/* the first card */}
            <div className="image-card left-10 sm:w-60 w-60 absolute rotate-[-8deg]">
              <div className="w-50 h-50 bg-[url('/image5.jpeg')] bg-cover mb-4 p-5"></div>
              <div className="text-black mb-10">10 | 03 | 2025</div>
            </div>

            {/* the second card */}

            <div className="image-card sm:w-60 w-60 absolute top-50 left-15 rotate-[8deg]">
              <div className="w-50 h-50 bg-[url('/image3.jpeg')] bg-cover mb-4 p-5"></div>
              <div className="text-black mb-10">10 | 03 | 2025</div>
            </div>
          </div>
          <div className="mt-25 mb-5">
            <p>
             Love is the gentle whisper that says, “I am here,” even in silence. It is the comfort of knowing that no matter where life takes you, you have someone to walk beside you. It is not just about finding the right person, but building something meaningful together—one moment, one memory, one heartbeat at a time. ----Offiong Joy George
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
