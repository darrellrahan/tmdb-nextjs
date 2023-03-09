import { getMovieDetails, getMovies } from "@/api";
import { ParamsProps } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params: { id } }: ParamsProps) {
  const movieDetails = await getMovieDetails(id);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        gap: "1rem",
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
        width={300}
        height={300}
      />
      <h1>{movieDetails.title}</h1>
      <h3>{movieDetails.release_date}</h3>
      <p>{movieDetails.overview}</p>
      <Link href="/" className="link">
        Back to Home
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const movieData = await getMovies();

  return movieData.results.map((data) => ({ id: data.id.toString() }));
}
