import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const HomeFeedContainer = () => {
  return <section className="w-full">
     <Tabs defaultValue="for_you" className="p-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="for_you">For you</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="for_you">
          <p>For you</p>
      </TabsContent>
      <TabsContent value="following">
          <p>Following</p>
      </TabsContent>
      </Tabs>
  </section>;
};

export default HomeFeedContainer;
