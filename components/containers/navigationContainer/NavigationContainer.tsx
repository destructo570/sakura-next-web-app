"use client";

import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { navigationRoutes } from "@/constants/Navigation";
import { usePathname, useRouter } from "next/navigation";
import { getInitialTabValue } from "@/utils/helper";

const NavigationContainer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [value, setValue] = useState<string>(() => getInitialTabValue(pathname));

  const getCurrentColor = (tab: string) => {
    return `${value === tab ? "white" : "#3f3f46"}`;
  };

  const renderTabs = () => {
    return navigationRoutes?.map((tab) => {
      const Icon = tab?.icon;
      return (
        <ToggleGroupItem
          value={tab?.value}
          className={"h-14 w-full my-2 ml-2"}
          key={`nav_${tab?.value}`}
        >
          <Icon className="h-6 w-6" color={getCurrentColor(tab?.value)} />
        </ToggleGroupItem>
      );
    });
  };

  const onToggleChange = (value: string) => {
    if (value) {
      setValue(value);
      router.push(value);
    }
  };

  return (
    <div className="flex gap-2 justify-evenly fixed bottom-0 left-0 right-0 sm:min-w-[576px] max-h-16 blur-background">
      <ToggleGroup
        type="single"
        className="w-full md:max-w-md"
        value={value}
        onValueChange={onToggleChange}
      >
        {renderTabs()}
      </ToggleGroup>
    </div>
  );
};

export default NavigationContainer;
