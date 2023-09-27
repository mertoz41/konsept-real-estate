import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "@/components/Header";
import Posts from "@/components/PostsContainer";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    let realToken = localStorage.getItem("jwt");
    if (!realToken) {
      router.push("/giris");
    }
  }, []);

  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows={"repeat(10, 1fr)"}
      templateColumns={"repeat(8, 1fr)"}
      backgroundColor={"#cccccc"}
    >
      <GridItem rowSpan={{ base: 1, xl: 1 }} colSpan={8}>
        <Header title="Admin Paneli" />
      </GridItem>
      <GridItem rowSpan={9} colSpan={8} flexWrap={"wrap"} overflowY="auto">
        <Posts />
      </GridItem>
    </Grid>
  );
};
export default Dashboard;
