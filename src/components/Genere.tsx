import { VStack, Text } from "@chakra-ui/react";
import useGeneres from "../Hooks/useGeneres";

const Generes = () => {
  const { data, error } = useGeneres();
  return (
    <VStack>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </VStack>
  );
};
export default Generes;
