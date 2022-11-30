import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../Components/Category";
import Create from "../Components/Create";
import Feed from "../Components/Feed";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import Sharevid from "../Components/Sharevid";
import { categories } from "../data";

const Home = ({ user }) => {
  return (
    <>
      <NavBar user={user} />

      <Flex direction={"column"} justify={"start"} align={"center"} w={20}>
        {categories &&
          categories.map((data) => <Category key={data.id} data={data} />)}
      </Flex>

      <Flex w={"full"} justify="center" align={"center"} px={4}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/videoDetail/:videoId" element={<Sharevid />} />
        </Routes>
      </Flex>
    </>
  );
};

export default Home;
