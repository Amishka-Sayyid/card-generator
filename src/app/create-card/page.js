import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import CardCreator from "@/components/CardCreator";

export default async function CreateCardPage() {
  // Fetch userId from Clerk's auth function (server-side)
  const { userId, email } = await auth();

  // Insert user
  const insertUserQuery = `
    INSERT INTO usercards (user_id, email) 
    VALUES ($1, $2)
    ON CONFLICT (user_id) 
    DO NOTHING;
  `;

  const insertUserValues = [userId, email]; // Use the email from the Clerk session

  try {
    await db.query(insertUserQuery, insertUserValues); // Insert user data into the database
  } catch (err) {
    console.error("Error inserting user into database:", err);
  }

  return (
    <>
      <main className="min-h-[80vh] w-full bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF] text-[#496c78] text-center flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold mb-4 drop-shadow-lg">
          Card Generator
        </h1>
        <p className="text-lg mb-6">
          Create a personalized greeting card below:
        </p>

        <CardCreator />
      </main>
    </>
  );
}
