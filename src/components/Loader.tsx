import { Image, SimpleGrid } from "@chakra-ui/react";

const MyLoader = () => {
  return (
    <SimpleGrid minChildWidth="max">
      <Image src="src\assets\loading.png" />;
    </SimpleGrid>
  );
};

export default MyLoader;
