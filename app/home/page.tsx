import HomeFeedContainer from "@/components/containers/homePageContainer/HomeFeedContainer";
import OtherSideContainer from "@/components/containers/otherSideContainer/OtherSideContainer";
import SideBarContainer from "@/components/containers/sideBarContainer/SideBarContainer";
import React from "react";

const HomePage = () => {
  return (
    <main className="flex w-full">
      <SideBarContainer />
      <HomeFeedContainer />
      <OtherSideContainer />
    </main>
  );
};

export default HomePage;
