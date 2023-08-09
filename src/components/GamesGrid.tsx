import { useState } from "react";
import { useEffect } from "react";
import ApiClient from "../services/Api-Client";
import { Text } from "@chakra-ui/react";
const GamesGrid = () => {
  interface games {
    id: number;
    name: string;
  }
  interface GamesResponse {
    count: number;
    results: games[];
  }
  const [Games, setGames] = useState<games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    ApiClient.get<GamesResponse>("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GamesGrid;
