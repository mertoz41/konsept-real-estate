import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { API_ROOT } from "../Constants";
const Posts = () => {
  const [currentPostings, setCurrentPostings] = useState([]);
  //   const navigation = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    // fetch(`${API_ROOT}/posts`)
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     setCurrentPostings(resp.posts);
    //   });
  };
  const renderPosting = (posting: any) => {
    return (
      <Box
        _hover={{
          color: "teal.500",
        }}
        key={posting.id}
        boxShadow="dark-lg"
        w={{ base: "360px", lg: "450px" }}
        alignSelf={"center"}
        marginTop={10}
        margin={{ base: 5 }}
        cursor="pointer"
        // onClick={() => navigation(`/ilanlar/${posting.id}`, { state: posting })}
      >
        <Box position={"relative"} fontWeight={600} fontSize={24}>
          <Image
            height={80}
            objectFit="cover"
            m="0 auto"
            // src={`${API_ROOT}${posting.pictures[0]}`}
          />
          <Text
            backgroundColor={"rgb(128,128,128, .5)"}
            padding={2}
            position={"absolute"}
            borderRadius={10}
            color="white"
            right={5}
            top={5}
          >
            {posting.for_sale ? "Satilik" : "Kiralik"}
          </Text>
          <Text position={"absolute"} color="white" right={5} bottom={5}>
            ${posting.cost}
          </Text>
        </Box>
        <Box padding={2} fontSize={20}>
          <Text>{posting.title}</Text>
          <Text>{posting.address}</Text>
          <Flex justify={"space-between"}>
            <Text>{posting.room_number} oda</Text>
            <Text>{posting.livingroom_number} salon</Text>
            <Text>{posting.size_brut}m2</Text>
          </Flex>
        </Box>
      </Box>
    );
  };

  return (
    <Box display={"flex"} justifyContent="center" flexDir={"column"}>
      {currentPostings?.map((posting) => renderPosting(posting))}
    </Box>
  );
};

export default Posts;
