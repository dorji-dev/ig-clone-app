import { useRouter } from "next/navigation";

export default async function Home() {
  const data = await fetch('https://firestore.googleapis.com/v1/projects/instagram-clone-281d9/databases', {
    method: "GET"
  })
  console.log(data)

  return (
    <main className="flex flex-col items-center justify-between p-24">
      
    </main>
  );
}
