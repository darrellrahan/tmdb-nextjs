import { getMovies } from "@/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const movieData = await getMovies();

  return (
    <main className="grid grid-cols-autofit gap-8">
      {movieData.results.map((data) => (
        <Link key={data.id} href={`/movies/${data.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            width={350}
            height={350}
            priority={true}
            className="w-full h-auto"
          />
          <h3>{data.title}</h3>
          <p>{data.release_date}</p>
        </Link>
      ))}
    </main>
  );
}
