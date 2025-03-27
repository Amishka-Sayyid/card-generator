// here page link from header or homepage , have all greeting card made and button to make one
// button will have userid passed and logic to check if one logged in if not request signup/login.
import { notFound } from "next/navigation";

export default function CreateCardPage() {
  return (
    <>
      <main className="min-h-[80vh] w-full bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF] text-[#496c78] text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-4 drop-shadow-lg">
          Card Generator Page.
        </h1>
        <p className="text-lg mb-6">Coming soon ...</p>
      </main>
    </>
  );
}
