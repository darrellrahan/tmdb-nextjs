import { getMovies } from "@/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export default async function Home() {
  const movieData = await getMovies();

  return (
    <main className={styles.main}>
      {movieData.results.map((data) => (
        <Link key={data.id} href={`/movies/${data.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            width={350}
            height={350}
            priority={true}
            className={styles.image}
          />
          <h3>{data.title}</h3>
          <p>{data.release_date}</p>
        </Link>
      ))}
    </main>
  );
}
