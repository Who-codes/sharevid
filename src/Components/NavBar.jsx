import {
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoAdd, IoLogOut, IoMoon, IoSearch, IoSunny } from "react-icons/io5";

const NavBar = ({ user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex justify={"space-between"} align={"center"} w={"100vw"} p={4}>
      <Link to={"/"}>
        <Heading
          as={"h2"}
          size="xl"
          color={colorMode == "light" ? "black" : "white"}
        >
          ShareVids
        </Heading>
      </Link>
      <InputGroup w={"60%"}>
        <InputLeftElement
          pointerEvents="none"
          children={<IoSearch fontSize={25} />}
        />
        <Input
          type="text"
          placeholder="Search..."
          fontSize={18}
          fontWeight={"medium"}
          variant={"filled"}
        />
      </InputGroup>

      <Flex justify={"center"} align="center" gap={8}>
        {/* Dark / Light mode */}
        <Flex
          w="40px"
          h="40px"
          justify={"center"}
          align="center"
          cursor={"pointer"}
          borderRadius="5px"
          onClick={toggleColorMode}
        >
          {colorMode == "light" ? (
            <IoMoon fontSize={25} />
          ) : (
            <IoSunny fontSize={25} />
          )}
        </Flex>

        {/* Create Btn */}
        <Link to="/create">
          <Flex
            w="40px"
            h="40px"
            justify={"center"}
            align="center"
            cursor={"pointer"}
            borderRadius="5px"
            _hover={{ shadow: "md" }}
            transition="ease-in-out"
            transitionDuration={"0.3s"}
            bg={bg}
          >
            <IoAdd
              fontSize={25}
              color={colorMode == "dark" ? "black" : "white"}
            />
          </Flex>
        </Link>
        <Menu>
          <MenuButton>
            <Image src={user?.photoURL} w="40px" h="40px" rounded="full" />
          </MenuButton>
          <MenuList shadow={"lg"}>
            <Link to={"/"}>
              <MenuItem>My Account</MenuItem>
            </Link>
            <MenuItem flexDirection={"center"} alignItems={"center"} gap={4}>
              Logout <IoLogOut fontSize={25} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default NavBar;
