import useGames from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GamesCard from "./GamesCard";
import MyLoader from "./Loader";
import GameContainer from "./GameContainer";
const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing="10px">
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameContainer>
              {" "}
              <MyLoader key={skeleton} />
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer>
            <GamesCard key={game.id} game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GamesGrid;
