import FadeIn from "@/components/FadeIn";

export default function RSVP() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <FadeIn>
        <form className="w-full max-w-md flex flex-col gap-4">
          <h1 className="text-3xl font-serif text-center mb-4">RSVP</h1>

          <input
            placeholder="Your Name"
            className="p-3 bg-black border border-gray-700 rounded"
          />

          <select className="p-3 bg-black border border-gray-700 rounded">
            <option>Will you attend?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <input
            placeholder="Guests"
            type="number"
            className="p-3 bg-black border border-gray-700 rounded"
          />

          <button className="bg-pink-600 py-3 rounded hover:bg-pink-700">
            Submit
          </button>
        </form>
      </FadeIn>
    </section>
  );
}