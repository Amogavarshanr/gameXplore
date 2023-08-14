import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../Hooks/useGames";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../Hooks/usePlatform";

interface Props {
  onPlatform: (platform: Platform) => void;
  selectPlatform: Platform | null;
}
const PlatForms = ({ onPlatform, selectPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((data) => (
          <MenuItem onClick={() => onPlatform(data)} key={data.id}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatForms;
