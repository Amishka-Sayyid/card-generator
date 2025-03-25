import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <main className="h-[50vh] w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-white text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-4 drop-shadow-lg">
          Card Generator
        </h1>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            Create Personalized Greeting Cards for Any Occasion!
          </h2>
          <p className="text-lg mb-6">
            Easily design and share beautiful greeting cards with just a few
            clicks.
          </p>
          <button className="btn btn-light px-6 py-3 text-lg rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
            Start Creating
          </button>
        </section>
      </main>
    </>
  );
}
