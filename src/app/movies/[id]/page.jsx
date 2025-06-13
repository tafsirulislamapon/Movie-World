import { FaStar } from "react-icons/fa";
import {movies} from "@/db";

export default function MovieDetails({ params }) {
  const movie = movies.find((movie) => movie.id === params.id);

  if (!movie) {
    return (
      <div className="p-8 bg-[#0D0D0D] min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-white">Movie not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 bg-[#0D0D0D] min-h-screen">
      <div className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </div>

      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie?.rating}</span> / 5
            </div>
          </div>
          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white">
              {movie?.comments} comments
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] p-6 rounded-xl">
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {(!movie?.commentsList || movie.commentsList.length === 0) ? (
            <p className="text-gray-400">No comments available for this movie.</p>
          ) : (
            movie?.commentsList.map((comment, index) => (
              <li
                key={index}
                className="bg-[#0D0D0D] p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-300 text-[16px] font-[600]">{comment}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

//this is for vercel to pre-render the routes
export async function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id,
  }));
}