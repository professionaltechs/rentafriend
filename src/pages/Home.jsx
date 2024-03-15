import React from "react";

// COMPONENTS
import FriendLocation from "../components/FriendLocation";
import Activities from "../components/Activities";
import Channels from "../components/Channels";

const Home = () => {
  return (
    <>
      <FriendLocation />
      <Activities />
      <Channels/>
    </>
  );
};

export default Home;
