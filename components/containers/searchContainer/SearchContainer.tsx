"use client";

import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useAction } from "next-safe-action/hooks";
import { searchUser } from "@/actions/user";
import PeopleItem from "./PeopleItem";
import { debounce } from "@/utils/helper";
import NoData from "@/components/common/NoData";

const SearchContainer = () => {
  const { execute, result } = useAction(searchUser);

  useEffect(() => {
    const getInitialUsersList = async () => {
      await execute({ query: "" });
    };
    getInitialUsersList();
  }, [execute]);

  const onChange = async (event: React.FormEventHandler<HTMLInputElement>) => {
    await execute({ query: event.target.value });
  };

  return (
    <div className="p-4 mx-auto">
      <Input
        placeholder="Search for someone"
        name="search-user"
        onChange={debounce(onChange, 500, false)}
      />
      {Array.isArray(result?.data) && result?.data?.length ? (
        result?.data?.map((user) => {
          return <PeopleItem key={user.id} user={user} />;
        })
      ) : (
        <NoData message="No users found!" />
      )}
    </div>
  );
};

export default SearchContainer;
