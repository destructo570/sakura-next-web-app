import React from "react";
import HomeFeedContainer from "@/components/containers/homePageContainer/HomeFeedContainer";
import AuthHeader from "@/components/common/AuthHeader";
import { fetchTopPosts } from "@/database/queries/post";

const Home = async () => {
  const post_list = await fetchTopPosts();

  return (
    <main className="flex flex-col justify-between">
      <header className="flex justify-center mb-4">
        <h2>S.</h2>
        <h3 className="flex-grow text-center">Home</h3>
        <AuthHeader />
      </header>
      <HomeFeedContainer posts_list={post_list} />
    </main>
  );
};

export default Home;
