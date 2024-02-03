"use client";

import React, { useState } from "react";
import { NavTabs, navigationRoutes } from "@/constants/Navigation";
import { usePathname, useRouter } from "next/navigation";
import { getInitialTabValue } from "@/utils/helper";
import { Tab, Tabs } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const NavigationContainer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const session = useSession();

  const [value, setValue] = useState<string>(() =>
    getInitialTabValue(pathname)
  );

  const getCurrentColor = (tab: string) => {
    return `${value === tab ? "white" : "#3f3f46"}`;
  };

  const renderTabs = () => {
    return navigationRoutes?.map((tab) => {
      const Icon = tab?.icon;
      return (
        <Tab
          key={tab?.value}
          title={
            <Icon className="h-6 w-6" color={getCurrentColor(tab?.value)} />
          }
          className="min-w-[76px] py-5"
        />
      );
    });
  };

  const onToggleChange = (value: string) => {
    if (value) {
      setValue(value);
      router.push(value === NavTabs.PROFILE ? `/profile/${session.data!.user.id}` : value);
    }
  };

  return (
    <div className="flex gap-2 justify-evenly fixed bottom-4 left-0 right-0 sm:min-w-[576px] max-h-16">
      <Tabs
        radius={"full"}
        selectedKey={value}
        onSelectionChange={onToggleChange}
        className="dark"
      >
        {renderTabs()}
      </Tabs>
    </div>
  );
};

export default NavigationContainer;
