import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2.jpg";
import ColorSwitch from "./ColorSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={logo} boxSize="60px" />
      <ColorSwitch />
    </HStack>
  );
};
export default NavBar;
