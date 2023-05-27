import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { CanceledError } from "axios";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErorr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErorr(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
