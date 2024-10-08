import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { db } from "note/server/db";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function HomePage() {
  
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign in Above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}