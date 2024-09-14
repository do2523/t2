import Link from "next/link";

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

export default function HomePage() {
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}