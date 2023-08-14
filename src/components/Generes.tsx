import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGeneres, { Genere } from "../Hooks/useGeneres";
import Cropimage from "../services/Cropimage";
interface Props {
  Onselect: (genre: Genere) => void;
}
const Generes = ({ Onselect }: Props) => {
  const { data, error, isLoading } = useGeneres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={Cropimage(genre.image_background)}
            />
            <Button onClick={() => Onselect(genre)} variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default Generes;
