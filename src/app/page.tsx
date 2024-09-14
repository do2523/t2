import { db } from "note/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/LvdWMb73Zg64QSuRuILWye1MKsuQjFJlB6OTmHndtkG29qNL",
  "https://utfs.io/f/LvdWMb73Zg64GMwRaqjUZ3smhTKiISjkgUxu5aBH7o2RpP8X",
  "https://utfs.io/f/LvdWMb73Zg64cth2dL9LZ9gvwokJ0i5qRpaS4CPt7eusxNVd",
  "https://utfs.io/f/LvdWMb73Zg64kKd4uDGrNZTHDRldYQhmjF6SgIsuUckiyn7b",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts)
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}