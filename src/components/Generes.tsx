import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGeneres from "../Hooks/useGeneres";
import Cropimage from "../services/Cropimage";

const Generes = () => {
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
            <Button variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default Generes;
