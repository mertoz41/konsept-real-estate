import React from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
// import { HamburgerIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";

// import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import store from "../redux/store";
const Header = ({ title }: { title: string }) => {
//   const navigation = useNavigate();
  const logUserOut = () => {
    // navigation("/login");
    localStorage.clear();
    // store.dispatch({ type: "LOG_USER_OUT" });
  };
  return (
    <Box boxShadow="dark-lg" height={"100%"} w="100%">
      <Heading textAlign={"center"} alignSelf="center" color="white">
        {title}
      </Heading>
      {/* {currentUser ? (
        <Box display={{ lg: "none" }} position={"absolute"} right={0} top="0">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              color={"white"}
            />
            <MenuList>
              <MenuItem
                onClick={() => navigation("/yeni_ilan")}
                icon={<AddIcon />}
              >
                yeni ilan ekle
              </MenuItem>
              <MenuItem onClick={() => logUserOut()} icon={<MinusIcon />}>
                cikis yap
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      ) : null} */}
      {/* {currentUser && title !== "Yeni Ilan" ? (
        <Flex justifyContent={"space-around"}>
          <Button onClick={() => navigation("/yeni_ilan")}>
            yeni ilan ekle
          </Button>
          <Button onClick={() => logUserOut()}>cikis yap</Button>
        </Flex>
      ) : null} */}
    </Box>
  );
};

// const mapStateToProps = (state) => ({ currentUser: state.currentUser });
export default Header;
