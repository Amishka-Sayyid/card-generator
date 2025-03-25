import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <main className="h-[65vh] w-full bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF] text-[#496c78] text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-4 drop-shadow-lg">
          Card Generator
        </h1>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            Welcome to the Card Generator!
          </h2>
          <p className="text-lg mb-6">
            Create beautiful, personalized greeting cards for your loved ones.
          </p>
          <button className="bg-[#134b70] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#508c9b] hover:scale-105 transition duration-300">
            Create Your Card
          </button>
        </section>
      </main>
    </>
  );
}
