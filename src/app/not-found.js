import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#9ab3bf]">
      <main className="min-h-[80vh] w-full bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF] text-[#496c78] text-center flex flex-col justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
          <p className="text-lg mb-6">
            It looks like you&apos;re lost. The page you&apos;re looking for
            doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-[#508c9b] text-white rounded-lg hover:bg-[#134b70] transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </div>
  );
}
