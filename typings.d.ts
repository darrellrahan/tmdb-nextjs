export type MovieData = {
  results: {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
  }[];
};

export type MovieDetail = {
  backdrop_path: string;
  title: string;
  release_date: string;
  overview: string;
};

export type ParamsProps = {
  params: {
    id: number;
  };
};
