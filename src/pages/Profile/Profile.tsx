import React from "react";
// import Cover from "./Cover";
import { Container } from "@chakra-ui/react";
import { Content } from "antd/es/layout/layout";

const Profile: React.FC = () => {
  return (
    <Container display={{ base: "block", md: "flex" }} maxW="container.xl">
      {/* <Sidebar /> */}
      <Content />
    </Container>
  );
};

export default Profile;
