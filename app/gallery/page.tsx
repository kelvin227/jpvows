import FadeIn from "@/components/FadeIn";

export default function Gallery() {
  return (
    <section className="min-h-screen px-6 py-20 text-center">
      <FadeIn>
        <h1 className="text-4xl font-serif mb-10">Gallery</h1>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <img src="/1.jpg" className="rounded-lg" />
        <img src="/2.jpg" className="rounded-lg" />
        <img src="/3.jpg" className="rounded-lg" />
      </div>
    </section>
  );
}