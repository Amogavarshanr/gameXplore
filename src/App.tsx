import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

import Generes from "./components/Generes";
import { useState } from "react";
import { Genere } from "./Hooks/useGeneres";
import PlatForms from "./components/Platforms";
import { Platform } from "./Hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genere | null;
  platform: Platform | null;
}
function App() {
  const [gamequery, setGamequery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "230px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Generes
              selectedGenre={gamequery.genre}
              Onselect={(genre) => setGamequery({ ...gamequery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatForms
              selectPlatform={gamequery.platform}
              onPlatform={(platform) =>
                setGamequery({ ...gamequery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GamesGrid gamequery={gamequery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
