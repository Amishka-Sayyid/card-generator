import { notFound } from "next/navigation";
import CardCreator from "@/components/CardCreator";

export default function CreateCardPage() {
  return (
    <>
      <main className="min-h-[80vh] w-full bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF] text-[#496c78] text-center flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold mb-4 drop-shadow-lg">
          Card Generator
        </h1>
        <p className="text-lg mb-6">
          Create a personalized greeting card below:
        </p>

        {/* Add CardCreator Component here */}
        <CardCreator />
      </main>
    </>
  );
}
