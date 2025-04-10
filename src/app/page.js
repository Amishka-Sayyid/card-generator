import Link from "next/link";
import homeStyles from "./main.module.css";
export default function Homepage() {
  return (
    <>
      <main
        className={` ${homeStyles.main} h-[80vh]  text-[#d1e0e5] text-center flex flex-col justify-center items-center `}
      >
        <h1 className="text-6xl font-semibold mb-4 drop-shadow-lg">
          Card Generator
        </h1>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">
            Welcome to the Card Generator!
          </h2>
          <p className="text-2xl mb-6">
            Create beautiful, personalized greeting cards for your loved ones.
          </p>
          <Link href="/create-card">
            <button className="bg-[#134b70] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#508c9b] hover:scale-105 transition duration-300">
              Create Your Card
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
