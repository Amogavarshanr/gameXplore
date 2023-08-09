import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Text>light</Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark</Text>
    </HStack>
  );
};
export default ColorSwitch;
