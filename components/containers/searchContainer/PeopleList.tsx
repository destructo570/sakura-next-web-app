import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button'
import PeopleItem from "./PeopleItem";


const PeopleList = () => {
  return (
    <div className="flex flex-col mt-6">
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
    </div>
  );
};

export default PeopleList;
