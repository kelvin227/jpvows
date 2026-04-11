import FadeIn from "@/components/FadeIn";

export default function Details() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <FadeIn>
        <div>
          <h1 className="text-4xl font-serif mb-6">Wedding Details</h1>

          <p className="mb-2">Kingdom Hall of Jehovah's Witness</p>
          <p className="mb-4 text-gray-400">
            30 Ogbore Street, Benin City
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="underline text-pink-400"
          >
            Open Map
          </a>
        </div>
      </FadeIn>
    </section>
  );
}