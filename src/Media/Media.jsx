import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../shumaComponents/Navbar";
import Footer from "../shumaComponents/Footer";
import blogs from "../AI/blogs";
import podcasts from "../AI/podcasts";
import Blogs from "../shumaComponents/Blogs";
import Podcasts2 from "../shumaComponents/Podcasts2";

const Media = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  return (
    <div>
      <Navbar />
      <TabContainer>
        <Tab
          active={activeTab === "blogs"}
          onClick={() => setActiveTab("blogs")}
        >
          Блогови
        </Tab>
        <Tab
          active={activeTab === "podcasts"}
          onClick={() => setActiveTab("podcasts")}
        >
          Поткасти
        </Tab>
      </TabContainer>
      <Content>
        {activeTab === "blogs" && <Blogs />}
        {activeTab === "podcasts" && <Podcasts2 />}
      </Content>
      <Footer />
    </div>
  );
};

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#333" : "#999")};
  border-bottom: 2px solid ${(props) => (props.active ? "#333" : "transparent")};
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default Media;
