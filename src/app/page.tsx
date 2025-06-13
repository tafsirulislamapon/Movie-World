import Link from "next/link";
import { FaStar, FaComment } from "react-icons/fa";
import { movies } from "@/db";
import React from "react";
export default function Dashboard() {

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
  ).toFixed(1);

  return (
    <div className="p-8 space-y-8 bg-[#0D0D0D] min-h-screen">
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg">
        <div className="flex flex-row w-full justify-between">
          <h2 className="text-3xl font-semibold text-[#FFFFFF] mb-4">
            Dashboard Overview
          </h2>
          <div className="flex flex-row items-center space-x-5">
            <Link href="/movies"  className="text-white text-[16px] cursor-pointer px-2 py-1 rounded font-[700] bg-green-500">
              Movie List
            </Link>
          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Rating</p>
            <p className="text-4xl font-bold">{averageRating} / 5</p>
          </div>
        </div>
      </div>
      {movies.filter(movie => movie.isFeatured).length > 0 && (
        <>
          <h2 className="text-3xl font-semibold text-white">Featured Movies</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.filter(movie => movie.isFeatured).map((movie) => (
              <li
                key={movie.id}
                className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link
                  href={`/movies/${movie.id}`}
                  className="text-2xl font-bold text-[#B3B3B3] hover:text-blue-600"
                >
                  {movie.title}
                </Link>
                <p className="text-gray-400 text-sm mt-2">{movie.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <FaComment className="mr-1" />
                    <span>{movie.comments}</span>
                  </div>
                  <div className="flex items-center text-sm text-yellow-400">
                    <FaStar className="mr-1" />
                    <span>{movie.rating}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
}