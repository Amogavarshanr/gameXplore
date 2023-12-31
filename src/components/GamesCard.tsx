import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { games } from "../Hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import Rating from "./Rating";
import Cropimage from "../services/Cropimage";
interface Props {
  game: games;
}

const GamesCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={Cropimage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Rating score={game.metacritic}></Rating>
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GamesCard;
