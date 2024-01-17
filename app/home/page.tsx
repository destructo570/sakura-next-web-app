import HomeFeedContainer from "@/components/containers/homePageContainer/HomeFeedContainer";
import SideBarContainer from "@/components/containers/sideBarContainer/SideBarContainer";
import React from "react";

const HomePage = () => {
  return (
    <main className="flex w-full">
      <SideBarContainer />
      <HomeFeedContainer />
    </main>
  );
};

export default HomePage;
