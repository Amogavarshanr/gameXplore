import useGames, { Platform } from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GamesCard from "./GamesCard";
import MyLoader from "./Loader";
import GameContainer from "./GameContainer";
import { Genere } from "../Hooks/useGeneres";

interface Props {
  selectedGenre: Genere | null;
  selectPlatform: Platform | null;
}
const GamesGrid = ({ selectedGenre, selectPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameContainer key={skeleton}>
              <MyLoader />
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer key={game.id}>
            <GamesCard game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GamesGrid;
