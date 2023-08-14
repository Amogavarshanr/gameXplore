import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

import Generes from "./components/Generes";
import { useState } from "react";
import { Genere } from "./Hooks/useGeneres";
import PlatForms from "./components/Platforms";
import { Platform } from "./Hooks/useGames";
function App() {
  const [selectedGenre, setSelectGenre] = useState<Genere | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
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
              selectedGenre={selectedGenre}
              Onselect={(genre) => setSelectGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatForms
            selectPlatform={selectPlatform}
            onPlatform={(platform) => setSelectPlatform(platform)}
          />
          <GamesGrid
            selectPlatform={selectPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
