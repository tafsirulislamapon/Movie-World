import Link from "next/link";
import {movies} from "@/db";

export default function MoviesPage() {


  return (
    <div className="p-6 bg-[#0D0D0D] ">
      <h2 className="text-3xl font-semibold mb-6 text-white">Movies List</h2>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-[#1A1A1A] p-4 rounded-lg">
            <Link
              href={`/movies/${movie.id}`}
              className="text-white font-[700] hover:text-blue-600"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}