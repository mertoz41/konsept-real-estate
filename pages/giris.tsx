import React, { useState, useContext, useEffect } from "react";
import { Box, Text, Input, Heading, Flex, Button } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/auth";
type Inputs = {
  username: string;
  password: string;
};
const Login = () => {
  const router = useRouter();
  const { updateToken } = useContext(AuthContext);
  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      router.push("/admin");
    }
  }, []);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setIsLoading(false);
        router.push("/admin");
        updateToken(resp.token);
        localStorage.setItem("jwt", resp.token);
      });
  };

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Box h="100vh" bg="#3d3d3d" justifyContent={"center"}>
      <Box
        w={{ base: "90%", lg: "50%" }}
        m="0 auto"
        justifyContent={"center"}
        borderRadius="10"
        paddingTop={40}
        display="flex"
        flexDir={"column"}
      >
        <Heading textAlign={"center"} color="white">
          Admin Giris
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex marginTop={5}>
            <Text flex={1} fontSize={20} color="white" alignSelf="center">
              kullanici adi
            </Text>
            <Input
              placeholder="kullanici adi"
              {...register("username")}
              flex={2}
            />
          </Flex>
          <Flex marginTop={5}>
            <Text flex={1} fontSize={20} color="white" alignSelf="center">
              parola
            </Text>
            <Input
              placeholder="parola"
              flex={2}
              {...register("password")}
              type="password"
            />
          </Flex>
          <Flex justifyContent="center">
            <Button
              isLoading={isLoading}
              colorScheme="teal"
              variant="outline"
              type="submit"
              color={"white"}
              marginTop={5}
            >
              giris yap
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
