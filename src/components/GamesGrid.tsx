import useGames from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GamesCard from "./GamesCard";
import MyLoader from "./Loader";
const GamesGrid = () => {
  const { Games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing="10px">
        {isLoading && <MyLoader />}
        {Games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GamesGrid;
